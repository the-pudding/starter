export default function(text, width) {
	text.each((d, i, nodes) => {
		const breakChars = ['/', '&', '-'];
		const sel = d3.select(nodes[i]);
		const textContent = sel.text();

		// Add a space after each break char for the function to use to determine line breaks
		const spacedContent = breakChars.reduce(
			(prev, cur) => prev.replace(cur, `${cur} `),
			textContent,
		);

		const words = spacedContent.split(/\s+/).reverse();

		const lineHeight = 1.1; // ems
		const x = text.attr('x') || 0;
		const y = text.attr('y') || 0;
		const dy = parseFloat(text.attr('dy') || 0);

		let tspan = sel
			.text(null)
			.append('tspan')
			.attr('x', x)
			.attr('y', y)
			.attr('dy', `${dy}em`);
		let lineNumber = 0;
		let line = [];

		words.reverse().forEach(word => {
			line.push(word);
			tspan.text(line.join(' '));

			if (tspan.node().getComputedTextLength() > width) {
				line.pop();
				const spanContent = line.join(' ');

				// Remove spaces trailing breakChars that were added above
				const unspacedContent = breakChars.reduce(
					(prev, cur) => prev.replace(`${cur} `, cur),
					spanContent,
				);

				tspan.text(unspacedContent);
				line = [word];

				tspan = sel
					.append('tspan')
					.attr('x', x)
					.attr('y', y)
					.attr('dy', `${++lineNumber * lineHeight + dy}em`)
					.text(word);
			}
		});
		sel.attr('data-lines', lineNumber + 1);
	});
}

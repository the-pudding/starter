import { selectAll } from "./dom";
/**
 * Fixes target blanks links
 */

export default function linkFix() {
  const links = selectAll("[target='_blank']");
  links.forEach(link => link.setAttribute("rel", "noopener"));
}

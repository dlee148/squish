function squish(node) {
  if (node.nodeType === Node.TEXT_NODE && node.nodeValue !== undefined) {
    node.nodeValue = node.nodeValue.replace(/Squash/g, 'Squish');
    node.nodeValue = node.nodeValue.replace(/SQUASH/g, 'SQUISH');
    node.nodeValue = node.nodeValue.replace(/squash/g, 'squish');
  }

  if (node.childNodes) {
    node.childNodes.forEach((node) => squish(node));
  }
}

squish(document.body);
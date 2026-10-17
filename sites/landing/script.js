document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.querySelector('.footer span');
  if (yearNode) {
    yearNode.textContent = `© ${new Date().getFullYear()} Remarka`;
  }
});

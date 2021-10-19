export const copyToClipboard = (hash: string) => {
  navigator.clipboard.writeText(`${window.location.origin}${hash}`);
};

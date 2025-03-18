export const getTextClass = (style: string | null) => {
  if (style == null) {
    return '';
  } else {
    return 'text-lg md:text-xl';
  }
};

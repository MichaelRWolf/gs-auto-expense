// @customfunction
function YYYY(moment: Date | string): string {
  const date = new Date(moment);
  return date.getFullYear().toString();
}

// @customfunction
function QQ(moment: Date | string): string {
  const date = new Date(moment);
  const month = date.getMonth() + 1;
  const quarter = Math.ceil(month / 3);
  return 'Q' + quarter;
}

// @customfunction
function YYYY_QQ(moment: Date | string): string {
  return YYYY(moment) + '-' + QQ(moment);
}

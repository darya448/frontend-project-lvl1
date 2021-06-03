const answer = (x, y) => {
  if (y > x) return answer(y, x);
	if (!y) return x;
	return answer(y, x % y);
}

export default answer;
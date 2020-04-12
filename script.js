const getDiscriminant = (a, b, c) => b * b - 4 * a * c;

const getRoot = (a, b, c) => {
  const discriminant = getDiscriminant(a, b, c)

  if (discriminant < 0) {
    return {}
  }
  if (discriminant === 0) {
    return {
      x1: -(b / 2 * a),
      x2: -b / 2 * a
    }
  }
  if (discriminant > 0) {
    return {
      x1: (-b + Math.sqrt(discriminant)) / (2 * a),
      x2: (-b - Math.sqrt(discriminant)) / (2 * a)
    }
  }
}

// alert('getRoot(2,3,2)');

// module.exports = {
//   getDiscriminant,
//   getRoot
// }

// alert(getRoot(2,3,2))
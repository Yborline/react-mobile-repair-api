const addValuePhone = (newObject, oldObject) => {
  const newArray = [newObject.spareParts, oldObject.spareParts];
  const { brand, model } = newObject;
  const summObj = newArray.reduce((acc, i) => {
    Object.keys(i).forEach((p) => {
      acc[p] = acc[p] || 0;
      acc[p] -= i[p];
    });
    return acc;
  }, {});

  return { brand, model, spareParts: summObj };
};

module.exports = addValuePhone;

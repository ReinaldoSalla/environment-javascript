const convertVarNameDot = (varName) => {
  let replaced = varName.replace("Dot", ".");
  const indexToLowercasify = replaced.indexOf(".") + 1;
  replaced = replaced.replace(replaced.charAt(indexToLowercasify), replaced.charAt(indexToLowercasify).toLowerCase());
  return replaced;
};
const convertVarNameIndex = (varName) => {
  for (let i = 0;i < 100;i++) {
    if (varName.includes(`Index${i}`))
      varName = varName.replace(`Index${i}`, `[${i}]`);
  }
  return varName;
};
const processPrimitive = ({ varName, varValue }) => {
  console.log(`\n${"*".repeat(100)}`);
  console.log(`variable "${varName}" is a primitive of type ${typeof varValue}`);
  console.log(varValue);
};
const processNonPrimitive = ({ varName, varValue }, type) => {
  console.log(`\n${"*".repeat(100)}`);
  console.log(`variable "${varName}" is an ${type}`);
  console.log(varValue);
};
const inspect = (obj, convertDot = true, convertIndex = true) => {
  console.log("\n".repeat(5));
  Object.entries(obj).forEach(([varName, varValue]) => {
    if (varName.includes("Dot") && convertDot)
      varName = convertVarNameDot(varName);
    if (varName.includes("Index") && convertIndex)
      varName = convertVarNameIndex(varName);
    if (Array.isArray(varValue)) {
      processNonPrimitive({ varName, varValue }, "array");
    }
    else if (typeof varValue === "object") {
      processNonPrimitive({ varName, varValue }, "object");
    }
    else {
      processPrimitive({ varName, varValue });
    }
  });
  console.log("\n".repeat(5));
};

export default inspect

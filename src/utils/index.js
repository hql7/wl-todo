
/**
 * @name 生成uuid
 */
const createUuid = () => {
  let temp_url = URL.createObjectURL(new Blob());
  let str_url = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  let uuid = str_url.substr(str_url.lastIndexOf("/") + 1);
  return uuid.replace(/-/g, '');
}

export {
  createUuid
}
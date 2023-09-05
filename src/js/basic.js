export default function specAttack(obj, destruction = 'Описание недоступно') {
  const arr = [];
  // eslint-disable-next-line guard-for-in
  for (const item in obj.special) {
    const {
      id, name, icon, description = destruction,
    } = obj.special[item];
    arr.push({
      id, name, icon, description,
    });
  }

  return arr;
}

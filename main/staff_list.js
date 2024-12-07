class StaffList {
  constructor() {
    this.arr = [];
  }
  addStaff(staff) {
    this.arr.push(staff);
  }
  findIndex(account) {
    let index = -1;
    for (let i = 0; i < this.arr.length; i++) {
      const staff = this.arr[i];
      if (staff.account === account) {
        index = i;
        break;
      }
    }
    return index;
  }
  removeStaff(account) {
    // Tìm vị trí
    const index = this.findIndex(account);
    // xóa accout khỏi mảng
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }
  edit(account) {
    // Tìm vị trí
    const index = this.findIndex(account);
    // Vị trí tìm thấy trong arr
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  }
  update(staff) {
    // Tìm vị trí trong arr cần update
    const index = this.findIndex(staff.account);
    if (index !== -1) {
      this.arr[index] = staff;
    }
  }
}
export default StaffList;

// Import Object
import Staff from "./staff.js";
import StaffList from "./staff_list.js";

export const getEleId = (id) => document.getElementById(id);

/** Staff List */
const staffList = new StaffList();

/**
 * Get Info
 */
const getInfo = () => {
  const account = getEleId("tknv").value;
  const fullname = getEleId("name").value;
  const email = getEleId("email").value;
  const password = getEleId("password").value;
  const daywork = getEleId("datepicker").value;
  const salary = getEleId("luongCB").value;
  const position = getEleId("chucvu").value;
  const workhours = getEleId("gioLam").value;

  // Staff Object
  const staff = new Staff(
    account,
    fullname,
    email,
    password,
    daywork,
    salary,
    position,
    workhours
  );
  // calc staff
  staff.calcSalary();
  return staff;
};

/** Render */
/**
 * 0. tạo content = ""
 * 1. duyệt mảng
 *  1.1. staff = data[i]
 */
const renderStaffList = (data) => {
  let content = "";
  for (let i = 0; i < data.length; i++) {
    const staff = data[i];
    content += `
      <tr>
          <td>${staff.account}</td>
          <td>${staff.fullname}</td>
          <td>${staff.email}</td>
          <td>${staff.daywork}</td>
          <td>${staff.position}</td>
          <td>${staff.totalWages}</td>
          <td>${staff.rank}</td>
          <td>
              <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="handleEdit('${staff.account}')">Edit</button>
              <button class="btn btn-danger"onclick="handleDelete('${staff.account}')">Delete</button>
          </td>
      </tr>
      `;
  }
  getEleId("tableDanhSach").innerHTML = content;
};
/**
 * Save local storage
 */
// Set local storage
const setLocalStorage = () => {
  const dataJSON = staffList.arr;
  // Chuyển kiểu dữ liệu từ data sang string
  const dataStrings = JSON.stringify(dataJSON);
  localStorage.setItem("STAFF-LIST", dataStrings);
};
// Get local storage
const getLocalStorage = () => {
  const dataStrings = localStorage.getItem("STAFF-LIST");
  if (!dataStrings) return;
  //  chuyển dữ liệu string sang data
  const dataJSON = JSON.parse(dataStrings);
  staffList.arr = dataJSON;
  // Render Staff List
  renderStaffList(staffList.arr);
};

getLocalStorage();

/**
 * Thêm nhân viên
 */
getEleId("btnThemNV").onclick = function () {
  const staff = getInfo();
  staffList.addStaff(staff);
  renderStaffList(staffList.arr);
  // Set local storage
  setLocalStorage();
};
/**
 * Handle Delete
 */
const handleDelete = (account) => {
  staffList.removeStaff(account);
  // Render staff
  renderStaffList(staffList.arr);
  setLocalStorage();
};
/**
 * Handle Edit
 */
const handleEdit = (account) => {
  const staff = staffList.edit(account);
  if (staff) {
    getEleId("tknv").value = staff.account;
    getEleId("name").value = staff.fullname;
    getEleId("email").value = staff.email;
    getEleId("password").value = staff.password;
    getEleId("datepicker").value = staff.daywork;
    getEleId("luongCB").value = staff.salary;
    getEleId("chucvu").value = staff.position;
    getEleId("gioLam").value = staff.workhours;
  }
};
/**
 * Update
 */
getEleId("btnCapNhat").onclick = function () {
  // Get info
  const info = getInfo();
  // Update staff to staff list
  staffList.update(info);
  // Render staff list
  renderStaffList(staffList.arr);
  // setLocalStorage
  setLocalStorage();
};
// Window
window.handleDelete = handleDelete;
window.handleEdit = handleEdit;

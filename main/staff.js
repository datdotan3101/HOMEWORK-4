class Staff {
  constructor(
    account,
    fullname,
    email,
    password,
    daywork,
    salary,
    position,
    workhours,
  ) {
    this.account = account;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.daywork = daywork;
    this.salary = salary;
    this.position = position;
    this.workhours = workhours;
    this.rank = "";
    this.totalWages = 0;
  }
  calcSalary() {
    let multiplier;
    switch (this.position) {
      case "Sếp":
        multiplier = 3;
        break;
      case "Trưởng phòng":
        multiplier = 2;
        break;
      case "Nhân viên":
        multiplier = 1;
        break;
      default:
        multiplier = 0;
        console.error("Chức vụ không hợp lệ!");
    }
    this.totalWages = this.salary * multiplier; // Cập nhật tổng lương
    return this.totalWages; // Trả về tổng lương
  }
  rankStaff() {
    if (this.workhours >= 192) {
      this.rank = "Xuất sắc";
    } else if (this.workhours >= 176) {
      this.rank = "Giỏi";
    } else if (this.workhours >= 160) {
      this.rank = "Khá";
    } else {
      this.rank = "Trung bình";
    }
    return this.rank; // Trả về giá trị xếp loại
  }
}
export default Staff;

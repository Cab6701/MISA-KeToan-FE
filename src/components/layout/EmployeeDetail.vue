<template>
  <div class="popup-contain" id="form-popup">
    <div class="popup-form">
      <div class="header-popup">
        <div class="header-popup-title">
          <div class="title-group">Thông tin nhân viên</div>
          <div class="div-checkbox px-6">
            <label class="checkbox-box label-popup">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <span class="label-checkbox">Là khách hàng</span>
          </div>
          <div class="div-checkbox px-6">
            <label class="checkbox-box label-popup">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <span class="label-checkbox">Là nhà cung cấp</span>
          </div>
        </div>
        <div class="header-popup-close">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Giúp (F1)"
            placement="bottom"
            :hide-after="0"
          >
            <div class="help-popup"></div>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Đóng (ESC)"
            placement="bottom"
            :hide-after="0"
          >
            <div
              class="close-popup"
              @keyup="show"
              @click="btnCloseDialog"
            ></div>
          </el-tooltip>
        </div>
      </div>
      <div class="divide-popup"></div>
      <div class="content-popup">
        <form action="" name="myForm">
          <div class="popup-content">
            <div class="row-info-input">
              <div class="col-info-input">
                <div class="info-input-box input-four">
                  <label for="info-id" class="info-input-label required"
                    >Mã</label
                  >
                  <input
                    ref="txtemployeeCodeRef"
                    v-model="employees.EmployeeCode"
                    type="text"
                    maxlength="20"
                    class="input-info input-info-required"
                    :class="{ 'input-validate': iColorCode }"
                    id="info-id"
                    name="infoId"
                    title="Mã không được để trống"
                    tabindex="1"
                  />
                </div>
                <div class="info-input-box input-six">
                  <label for="info-name" class="info-input-label required"
                    >Tên</label
                  >
                  <input
                    v-model="employees.FullName"
                    type="text"
                    ref="txtFullNameRef"
                    class="input-info input-info-required"
                    :class="{ 'input-validate': iColorName }"
                    id="info-name"
                    name="infoName"
                    title="Tên không được để trống"
                    maxlength="100"
                    tabindex="2"
                  />
                </div>
              </div>
              <div class="col-info-input">
                <div class="info-input-box input-four">
                  <label for="info-date" class="info-input-label"
                    >Ngày sinh</label
                  >
                  <input
                    v-model="dateOfBirth"
                    type="date"
                    class="input-info input-date"
                    :class="{ 'input-validate': iColorDateOfBirth }"
                    id="info-date"
                    placeholder="DD/MM/YYYY"
                    name="infoDate"
                    tabindex="5"
                  />
                </div>
                <div class="info-input-box col-2-of-3 input-six">
                  <label
                    for="info-date"
                    class="info-input-label info-input-gender"
                    >Giới tính</label
                  >
                  <div class="info-input-boxradio">
                    <div class="gender-male">
                      <input
                        v-model="employees.Gender"
                        type="radio"
                        name="info-gender"
                        id="nam"
                        value="0"
                        checked
                        tabindex="6"
                      />
                      <label class="option-radio" for="nam">Nam</label>
                    </div>
                    <div class="gender-female">
                      <input
                        v-model="employees.Gender"
                        type="radio"
                        name="info-gender"
                        id="nu"
                        value="1"
                      />
                      <label class="option-radio" for="nu">Nữ</label>
                    </div>
                    <div class="gender-other">
                      <input
                        v-model="employees.Gender"
                        type="radio"
                        name="info-gender"
                        id="khac"
                        value="2"
                      />
                      <label class="option-radio" for="khac">Khác</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row-info-input">
              <div class="col-info-input">
                <div class="info-input-box col-full">
                  <label for="info-id" class="info-input-label required"
                    >Đơn vị</label
                  >
                  <el-select
                    ref="txtDepartmentRef"
                    :class="{ 'error-color': iColorDepartment }"
                    class="sel-footer-right"
                    v-model="employees.DepartmentId"
                    tabindex="3"
                    :filterable="true"
                    :autocomplete="on"
                    :default-first-option="true"
                    placeholder="Chọn phòng ban"
                  >
                    <el-option
                      v-for="d in departments"
                      :key="d.DepartmentId"
                      :value="d.DepartmentId"
                      :label="d.DepartmentName"
                    />
                  </el-select>
                </div>
              </div>
              <div class="col-info-input">
                <div class="info-input-box col-2-of-3 input-six">
                  <el-tooltip
                    class="box-item"
                    effect="dark"
                    content="Số chứng minh thư nhân dân"
                    placement="bottom"
                  >
                    <label for="info-name" class="info-input-label"
                      >Số CMND
                    </label>
                  </el-tooltip>
                  <input
                    v-model="employees.IdentityNumber"
                    type="text"
                    class="input-info"
                    id="info-card"
                    name="infoCard"
                    maxlength="12"
                    tabindex="7"
                  />
                </div>
                <div class="info-input-box input-four">
                  <label for="info-init" class="info-input-label"
                    >Ngày cấp</label
                  >
                  <input
                    v-model="identityOfDate"
                    type="date"
                    class="input-info input-date"
                    :class="{ 'input-validate': iColorIdentityDate }"
                    id="info-init"
                    placeholder="DD/MM/YYYY"
                    name="infoDateInit"
                    tabindex="8"
                  />
                </div>
              </div>
            </div>
            <div class="row-info-input popup-group">
              <div class="col-info-input">
                <div class="info-input-box col-full">
                  <label for="info-position" class="info-input-label"
                    >Chức danh</label
                  >
                  <input
                    v-model="employees.PositionName"
                    type="text"
                    class="input-info"
                    id="info-position"
                    name="infoPosition"
                    tabindex="4"
                  />
                </div>
              </div>
              <div class="col-info-input">
                <div class="info-input-box col-full">
                  <label for="info-place" class="info-input-label"
                    >Nơi cấp</label
                  >
                  <input
                    v-model="employees.IdentityPlace"
                    type="text"
                    class="input-info"
                    id="info-place"
                    name="infoPlace"
                    maxlength="255"
                    tabindex="9"
                  />
                </div>
              </div>
            </div>
            <div class="row-info-input">
              <div class="info-input-box col-full">
                <label for="info-address" class="info-input-label"
                  >Địa chỉ</label
                >
                <input
                  v-model="employees.Address"
                  type="text"
                  class="input-info"
                  id="info-address"
                  name="infoAddress"
                  maxlength="255"
                  tabindex="10"
                />
              </div>
            </div>
            <div class="row-info-input flex-start">
              <div class="info-input-box col-1-of-4">
                <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="Số điện thoại di động"
                  :class="{ 'input-validate': iColorPhone }"
                  placement="bottom"
                  :hide-after="0"
                >
                  <label for="info-cell-phone" class="info-input-label"
                    >ĐT di động</label
                  ></el-tooltip
                >
                <input
                  v-model="employees.PhoneNumber"
                  type="text"
                  class="input-info"
                  id="info-cell-phone"
                  name="infoCellPhone"
                  maxlength="10"
                  tabindex="11"
                />
              </div>
              <div class="info-input-box col-1-of-4">
                <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="Số điện thoại cố định"
                  :class="{ 'input-validate': iColorTelePhone }"
                  placement="bottom"
                  :hide-after="0"
                >
                  <label for="info-phone" class="info-input-label"
                    >ĐT cố định</label
                  ></el-tooltip
                >
                <input
                  v-model="employees.TelephoneNumber"
                  type="text"
                  class="input-info"
                  id="info-phone"
                  name="infoPhone"
                  maxlength="10"
                  tabindex="12"
                />
              </div>
              <div class="info-input-box col-1-of-4">
                <label for="info-email" class="info-input-label">Email</label>
                <input
                  v-model="employees.Email"
                  type="text"
                  class="input-info"
                  :class="{ 'input-validate': iColorEmail }"
                  id="info-email"
                  name="infoEmail"
                  maxlength="100"
                  tabindex="13"
                />
              </div>
            </div>
            <div class="row-info-input flex-start">
              <div class="info-input-box col-1-of-4">
                <label for="info-account-number" class="info-input-label"
                  >Tài khoản ngân hàng</label
                >
                <input
                  v-model="employees.BankAccountNumber"
                  type="text"
                  class="input-info"
                  id="info-account-number"
                  name="infoAccountNumber"
                  maxlength="50"
                  tabindex="14"
                />
              </div>
              <div class="info-input-box col-1-of-4">
                <label for="info-bank-name" class="info-input-label"
                  >Tên ngân hàng</label
                >
                <input
                  v-model="employees.BankName"
                  type="text"
                  class="input-info"
                  id="info-bank-name"
                  name="infoBankName"
                  maxlength="255"
                  tabindex="15"
                />
              </div>
              <div class="info-input-box col-1-of-4">
                <label for="info-bank-branch" class="info-input-label"
                  >Chi nhánh</label
                >
                <input
                  v-model="employees.BankProvinceName"
                  type="text"
                  class="input-info"
                  id="info-bank-branch"
                  name="infoBankBranch"
                  maxlength="255"
                  tabindex="16"
                />
              </div>
            </div>
          </div>
          <div class="footer-popup">
            <div class="divide"><!----></div>
            <div class="footer-popup-btn">
              <div class="add">
                <div class="add-btn">
                  <div class="group-btnadd">
                    <div class="btn-submit px-3">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="Cất (Ctrl + S)"
                        placement="bottom"
                        :hide-after="0"
                      >
                        <button
                          @click="SubmitForm"
                          type="submit"
                          value="Cất"
                          class="btn-default btn-text"
                          tabindex="17"
                        >
                          Cất
                        </button>
                      </el-tooltip>
                    </div>
                    <div class="submitAndAdd">
                      <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="Cất và thêm (Ctrl + Shift + S)"
                        placement="bottom"
                        :hide-after="0"
                      >
                        <button
                          @click="SubmitAndAdd"
                          type="submit"
                          value="Cất và thêm"
                          class="btn-message-close btn-not-focus"
                          tabindex="18"
                        >
                          Cất và thêm
                        </button></el-tooltip
                      >
                    </div>
                  </div>
                </div>
                <div class="cancel">
                  <button
                    class="btn-default btn-text"
                    @click="closePopup"
                    tabindex="19"
                  >
                    Huỷ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div v-if="IsShowMessage" class="popup-message-contain">
    <div class="popup-message">
      <div class="message">
        <div class="box-icon-message">
          <div class="icon-message"></div>
        </div>
        <div class="message-content">
          <p>{{ errors }}</p>
        </div>
      </div>
      <div class="message-line-message"></div>
      <div class="popup-message-footer">
        <button class="btn-message-close" @click="popupValidateClose()">
          Đóng
        </button>
      </div>
    </div>
  </div>
  <div v-if="IsShowMessageEdit" class="popup-message-contain">
    <div class="popup-message">
      <div class="message">
        <div class="box-icon-message">
          <div class="icon-message-question"></div>
        </div>
        <div class="message-content">
          <p>{{ errors }}</p>
        </div>
      </div>
      <div class="message-line-message"></div>
      <div class="">
        <div class="btn-confirm-group">
          <div class="left-btn">
            <button class="btn-default btn-text" @click="btnCancelMessage()">
              Huỷ
            </button>
          </div>
          <div class="right-btn">
            <div class="right-first">
              <button class="btn-default btn-text" @click="btnNoMessage()">
                Không
              </button>
            </div>
            <div class="right-second">
              <button class="btn-message-close" @click="btnAgreeMessage">
                Có
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ElMessage } from "element-plus";
import { title } from "process";
export default {
  name: "EmployeeDetails",
  data() {
    return {
      IsShowMessage: false, // Thông báo khi có lỗi validate xảy ra
      IsShowMessageEdit: false, // Thông báo hỏi lại khi thoát khỏi chế độ nhập hoặc sửa
      errors: [], // Lỗi
      IsShow: true,
      employees: {},
      departments: [],
      dateOfBirth: "",
      identityOfDate: "",
      checkVal: false, // Biến kiểm tra validate input
      checkRef: "", // Biến chứa ref input bị lỗi
      keyPress: false,

      iColorCode: false,
      iColorDepartment: false,
      iColorName: false,
      iColorDateOfBirth: false,
      iColorIdentityDate: false,
      iColorPhone: false,
      iColorTelePhone: false,
      iColorEmail: false,
    };
  },
  props: {
    // Chuyển thông tin đã chọn bên thằng cha cho thằng con
    employeeSelected: {
      type: Object,
    },
    // Hàm này chứa thông tin của tất cả bản ghi employee
    employeeArray: {
      type: Object,
    },

    // Chế độ thêm và sửa
    EditMode: {
      type: Number,
      default: 0, //0: Thêm mới ; 1: Sửa ; 2: Nhân bản
      required: true,
    },
  },

  methods: {
    /**
     * Author:THBAC(11/7/2022 - 20:52)
     * Hàm check validate
     */
    validate() {
      // Định dạng của Email
      var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      // Check input của tên và mã phòng ban có trống hay không. Nếu trống thì thông báo lỗi luôn
      if (!this.employees.EmployeeCode) {
        this.IsShowMessage = true;
        this.errors = "Bạn không được để trống mã nhân viên !";
        return false;
      }
      //Check input full name không được rỗng
      else if (!this.employees.FullName) {
        this.IsShowMessage = true;
        this.errors = "Bạn không được để trống tên nhân viên !";
        this.checkRef = "txtFullNameRef";
        this.$nextTick(() => this.$refs.txtFullNameRef.focus());
        return false;
      }
      //Check input phòng ban không được rỗng
      else if (!this.employees.DepartmentId) {
        this.IsShowMessage = true;
        this.errors = "Bạn không được để trống tên đơn vị!";
        return false;
      } else if (new Date(this.dateOfBirth) > new Date()) {
        this.IsShowMessage = true;
        this.errors = "Ngày sinh không được phép lớn hơn ngày hiện tại!";
        this.checkRef = "DateOfBirthRef";
        return false;
      }
      // else if (
      //   this.employees.IdentityNumber &&
      //   isNaN(this.employees.IdentityNumber)
      // ) {
      //   this.IsShowMessage = true;
      //   this.errors = "Số chứng minh thư nhân dân phải là số!";
      //   return false;
      // }
      else if (new Date(this.identityOfDate) > new Date()) {
        this.IsShowMessage = true;
        this.errors = "Ngày cấp không được phép lớn hơn ngày hiện tại!";
        return false;
      }
      //Check input ngày tháng không lớn hơn ngày hiện tại
      else if (this.employees.Email && !this.employees.Email.match(regex)) {
        this.IsShowMessage = true;
        this.errors = "Email không đúng định dạng!";
        return false;
      }
      //Check input số điện thoại phải là số
      else if (
        this.employees.PhoneNumber &&
        isNaN(this.employees.PhoneNumber)
      ) {
        this.IsShowMessage = true;
        this.errors = "Số điện thoại di động phải là số!";
        return false;
      }
      //Check input số điện thoại phải là số
      else if (
        this.employees.TelephoneNumber &&
        isNaN(this.employees.TelephoneNumber)
      ) {
        this.IsShowMessage = true;
        this.errors = "Số điện thoại cố định phải là số!";
        return false;
      } else {
        // Chỉ có thằng thêm mới thì mới check mã đã tồn tại chưa, thằng sửa không cần
        if (this.EditMode == 0 || this.EditMode == 2) {
          // Tiếp theo check tiếp xem mã mới đã tồn tại trong hệ thống chưa? Nếu có vả lỗi luôn
          for (let index = 0; index < this.employeeArray.length; index++) {
            if (
              this.employees.EmployeeCode ==
              this.employeeArray[index].EmployeeCode
            ) {
              this.IsShowMessage = true;
              this.errors =
                "Mã nhân viên <" +
                this.employees.EmployeeCode +
                "> đã tồn tại trong hệ thống, vui lòng kiểm tra lại.";
              return false;
            }
          }
          //Check trùng mã khi sửa
        } else if (this.EditMode == 1) {
          this.employeeArray.forEach((element) => {
            if (
              element.EmployeeCode == this.employees.EmployeeCode &&
              element.EmployeeId != this.employees.EmployeeId
            ) {
              this.IsShowMessage = true;
              this.errors = `Mã nhân viên <${this.employees.EmployeeCode}> đã tồn tại trong hệ thống, vui lòng kiểm tra lại.`;
              return false;
            }
          });
        } else return true;
      }

      return true;
    },
    /**
     * Author: THBAC (21/7/2002 - 22h37)
     * Nút không trong form thông báo khi tắt form chi tiết
     */
    btnNoMessage() {
      try {
        this.IsShowMessageEdit = false;
        this.$emit("CloseDialog", false);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author:THBAC(11/7/2022 - 20:52)
     * Button Đóng Message báo lỗi
     */
    popupValidateClose() {
      try {
        if (!this.errors) {
          this.iColorName = false;
          this.iColorDepartment = false;
        } else {
          this.iColorName = true;
          this.iColorDepartment = true;
        }
        this.errors = {};
        this.IsShowMessage = false;
        this.$nextTick(() => this.$refs.txtFullNameRef.focus());
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author:THBAC(11/7/2022 - 20:52)
     * Button Cắt chỉ có việc check validate và thêm mới thông tin nhân viên. Xong là đóng form
     */
    SubmitForm(event) {
      event.preventDefault();
      //Validate
      var me = this;
      try {
        // Nếu là chế độ thêm mới dữ liệu thì check validate và thêm mới
        if (this.EditMode == 0 || this.EditMode == 2) {
          if (this.validate() == false) {
            return;
          } else {
            ElMessage({
              showClose: true,
              message: "Thêm thành công!",
              type: "success",
              center: true,
            });
            if (this.dateOfBirth) {
              this.employees.DateOfBirth = this.dateOfBirth;
            }
            if (this.identityOfDate) {
              this.employees.IdentityDate = this.identityOfDate;
            }
            axios
              .post("http://localhost:5046/api/v1/Employees", this.employees)
              .then(function (response) {
                me.$emit("CloseDialog", false);
                me.$emit("reloadPage");
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }

        //Code sửa dữ liệu vẫn check validate và sửa dữ liệu
        if (this.EditMode == 1) {
          if (this.validate() == false) {
            return;
          } else {
            if (this.dateOfBirth) {
              this.employees.DateOfBirth = this.dateOfBirth;
            }
            if (this.identityOfDate) {
              this.employees.IdentityDate = this.identityOfDate;
            }

            ElMessage({
              showClose: true,
              message: "Sửa thành công!",
              type: "success",
              center: true,
            });
            axios
              .put(`http://localhost:5046/api/v1/Employees`, this.employees)
              .then(function (response) {
                me.$emit("CloseDialog", false);
                me.$emit("reloadPage");
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author:THBAC(11/7/2022 - 20:52)
     * Button Cắt và Thêm có nhiệm vụ check validate thêm mới dữ liệu. Nếu thêm thành công reset các ô và lấy mã nhân viên mới
     */
    SubmitAndAdd(event) {
      event.preventDefault();
      var me = this;
      try {
        if (this.EditMode == 0 || this.EditMode == 2) {
          if (this.validate() == false) {
            return;
          } else {
            //Post dữ liệu
            ElMessage({
              showClose: true,
              message: "Thêm thành công!",
              type: "success",
              center: true,
            });
            if (this.dateOfBirth) {
              this.employees.DateOfBirth = this.dateOfBirth;
            }
            if (this.identityOfDate) {
              this.employees.IdentityDate = this.identityOfDate;
            }
            axios
              .post("http://localhost:5046/api/v1/Employees", this.employees)
              .then(function (response) {
                if (response == null) return;
                else {
                  me.employees = {};
                  me.dateOfBirth = "";
                  me.identityOfDate = "";
                  me.getNewEmployeeCode(); //Thực hiện lấy mã nhân viên mới
                  console.log(response);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }

        //Code sửa dữ liệu
        if (this.EditMode == 1) {
          if (this.validate() == false) {
            return;
          } else {
            ElMessage({
              showClose: true,
              message: "Sửa thành công!",
              type: "success",
              center: true,
            });
            if (this.dateOfBirth) {
              this.employees.DateOfBirth = this.dateOfBirth;
            }
            if (this.identityOfDate) {
              this.employees.IdentityDate = this.identityOfDate;
            }
            axios
              .put(`http://localhost:5046/api/v1/Employees`, this.employees)
              .then(function (response) {
                me.$emit("CloseDialog", false);
                me.$emit("reloadPage");
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (25/7/2022)
     * Lấy mã nhân viên mới
     */
    getNewEmployeeCode() {
      var me = this;
      try {
        axios
          .get("http://localhost:5046/api/v1/Employees/newEmployeeCode")
          .then(function (res) {
            let newEmployeeCode = res.data;
            me.employees.EmployeeCode = newEmployeeCode;

            //Focus vào ô input đầu tiên
            me.$refs.txtemployeeCodeRef.focus();
          });
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author:THBAC(11/7/2022 - 20:52)
     * Nút đóng hộp thoại Dialog (Nút X). Trước khi đóng hỏi xem khách hàng có muốn thoát không. Nếu thoát sẽ bị mất dữ liệu đang nhập
     */
    btnCloseDialog() {
      try {
        this.IsShowMessageEdit = true;
        this.errors = "Dữ liệu đã bị thay đổi. Bạn có muốn cất không?";
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author:THBAC(11/7/2022 - 20:52)
     * Nút đồng ý tắt form thêm hoặc sửa thông tin nhân viên
     */
    btnAgreeMessage() {
      try {
        this.IsShowMessageEdit = false;
        this.SubmitForm(event);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author:THBAC(11/7/2022 - 20:52)
     * Nút huỷ tắt form thêm hoặc sửa thông tin nhân viên
     */
    btnCancelMessage() {
      try {
        this.IsShowMessageEdit = false;
        this.$nextTick(function () {
          this.$refs.txtemployeeCodeRef.focus();
        });
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author:THBAC(11/7/2022 - 20:52)
     * Nút huỷ form chi tiết
     */
    closePopup() {
      try {
        this.$emit("CloseDialog", false);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC(17/7/2022 - 20h52)
     * Định dạng ngày tháng
     */
    formatDate(dob) {
      try {
        let dateConvert = new Date(dob);
        if (
          dob &&
          dateConvert instanceof Date &&
          !isNaN(dateConvert.valueOf())
        ) {
          let date = dateConvert.getDate();
          date = date < 10 ? `0${date}` : date;
          // lay ra thang
          let month = dateConvert.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
          // lay ra nam
          let year = dateConvert.getFullYear();
          dob = `${year}-${month}-${date}`;
          return dob;
        } else return null;
      } catch (error) {
        console.log(error);
      }
    },
    // onEscapeKeyUp(event) {
    //   if (event.which == 27) {
    //     this.btnCloseDialog();
    //   }
    // },
  },
  // watch: {
  //   show() {
  //     if (this.keyPress === false) {
  //       window.removeEventListener("keyup", this.onEscapeKeyUp);
  //     } else {
  //       window.addEventListener("keyup", this.onEscapeKeyUp);
  //     }
  //   },
  // },
  /**
   * Author:THBAC(11/7/2022 - 20:52)
   * Hàm khởi tạo dữ liệu
   */
  created() {
    var me = this;
    //Kiểm tra thông tin mã nhân viên
    if (this.EditMode == 0) {
      //Lấy mã nhân viên mới
      this.getNewEmployeeCode();
    } else if (this.EditMode == 1) {
      //Không cho thay đổi trực tiếp cả thằng con lẫn thằng cha
      me.employees = JSON.parse(JSON.stringify(me.employeeSelected));
      // Focus vào ô input mã nhân viên
      me.$nextTick(() => me.$refs.txtemployeeCodeRef.focus());
    } else {
      //Không cho thay đổi trực tiếp cả thằng con lẫn thằng cha
      me.employees = JSON.parse(JSON.stringify(me.employeeSelected));
      me.employees.EmployeeCode = me.getNewEmployeeCode();
      // Focus vào ô input mã nhân viên
      me.$nextTick(() => me.$refs.txtemployeeCodeRef.focus());
    }

    //Lấy thông tin department
    axios.get("http://localhost:5046/api/v1/Department").then(function (res) {
      me.departments = res.data;
      console.log(res);
    });

    //Format lại ngày tháng năm sinh
    this.dateOfBirth = this.formatDate(this.employees.DateOfBirth);
    //Format lại ngày tháng cấp chứng minh thư
    this.identityOfDate = this.formatDate(this.employees.IdentityDate);
  },

  /**
   * Author: THBAC (25/7/2022)
   * Hàm update màu cho các input bị sai
   */
  updated() {
    try {
      // Định dạng của Email
      var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      // Check input của mã phòng ban có trống hay không. Nếu trống thì thông báo lỗi
      if (!this.employees.EmployeeCode) {
        this.iColorCode = true;
      } else this.iColorCode = false;
      // Check input của tên nhân viên
      if (this.employees.FullName) {
        this.iColorName = false;
      }
      // Check input của tên phòng ban
      if (this.employees.DepartmentId) {
        this.iColorDepartment = false;
      }
      // Check input của ngày sinh xem có lớn hơn ngày hiện tại không
      if (
        this.employees.DateOfBirth &&
        new Date(this.employees.DateOfBirth) > new Date()
      ) {
        this.iColorDateOfBirth = true;
      } else this.iColorDateOfBirth = false;
      // Check input của ngày cấp xem có lớn hơn ngày hiện tại không
      if (
        this.employees.IdentityDate &&
        new Date(this.identityOfDate) > new Date()
      ) {
        this.iColorIdentityDate = true;
      } else this.iColorIdentityDate = false;
      // Check input của email có đúng Regex
      if (this.employees.Email && !this.employees.Email.match(regex)) {
        this.iColorEmail = true;
      } else this.iColorEmail = false;
      // Check input của số điện thoại phải là số
      if (this.employees.PhoneNumber && isNaN(this.employees.PhoneNumber)) {
        this.iColorPhone = true;
      } else this.iColorPhone = false;
      // Check input của số điện thoại cố định phải là số
      if (
        this.employees.TelephoneNumber &&
        isNaN(this.employees.TelephoneNumber)
      ) {
        this.iColorTelePhone = true;
      } else this.iColorTelePhone = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style>
</style>
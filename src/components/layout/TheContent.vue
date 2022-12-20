<template>
  <div class="main the-content" id="main">
    <!-- Header-main -->
    <div class="header" id="header">
      <div class="header-left">
        <div class="togge margin-ten"></div>
        <div class="dropdown-header">
          <button class="btn-dropdown">
            CÔNG TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC
          </button>
          <div class="arrow-title margin-ten"></div>
        </div>
      </div>
      <div class="header-right">
        <div class="user-header">
          <div class="notify"></div>
          <div class="info-user">
            <div class="avt-user">
              <div class="img-user"></div>
            </div>
            <div class="dropdown-header user-name">
              <div class="user-name-contain">
                <button class="btn-dropdown">Nguyễn Văn Mạnh</button>
              </div>
              <div class="arrow-title"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="content" id="content">
      <div class="header-content" id="header-content">
        <h1>Nhân viên</h1>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="Thêm mới nhân viên"
          placement="bottom"
        >
          <button class="btn-message-close" @click="btnAddNew">
            Thêm nhân viên
          </button>
        </el-tooltip>
      </div>
      <div class="content-data" id="content-data">
        <div class="content-search">
          <div class="content-tool">
            <el-dropdown trigger="click" class="dropdown-delete">
              <span class="dropdown-delete-link" @click="checkSelected">
                <div class="delete-link">Thực hiện hàng loạt</div>
                <div class="arrow-down"></div>
              </span>
              <template #dropdown v-if="isShowDeleteSerial">
                <el-dropdown-menu>
                  <el-dropdown-item
                    class="dropdown-delete-li"
                    @click="btnDeleteSerial"
                    >Xoá</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="input-icon-container">
            <input
              type="text"
              class="m-input input-size"
              placeholder="Tìm theo Mã, tên nhân viên"
              @keyup="search"
              v-model="filterName"
            />
            <div class="search icon-input"></div>
          </div>
          <div class="icon-list">
            <el-tooltip
              class="box-item"
              effect="dark"
              content="Lấy lại dữ liệu"
              placement="bottom"
            >
              <div class="list-button" @click="btnReload">
                <div class="refresh-img"></div>
              </div>
            </el-tooltip>
            <el-tooltip
              class="box-item"
              effect="dark"
              content="Xuất ra Excel"
              placement="bottom"
            >
              <div class="list-button" @click="tableToExcel">
                <div class="export-img"></div>
              </div>
            </el-tooltip>
            <el-tooltip
              class="box-item"
              effect="dark"
              content="Tuỳ chỉnh giao diện"
              placement="bottom"
            >
              <div class="list-button">
                <div class="setting-icon"></div>
              </div>
            </el-tooltip>
          </div>
        </div>
        <div class="content-table-page">
          <div class="content-table">
            <table class="table" ref="table">
              <thead>
                <th class="td-check center sticky-left-th">
                  <div class="div-checkbox">
                    <label class="checkbox-box">
                      <input type="checkbox" v-model="selectAll" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </th>
                <th class="td-id left">Mã nhân viên</th>
                <th class="td-name left">Tên nhân viên</th>
                <th class="td-gender left">Giới tính</th>
                <th class="td-date center">Ngày sinh</th>
                <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="Số chứng minh thư nhân dân"
                  placement="bottom"
                >
                  <th class="td-card left">Số CMND</th>
                </el-tooltip>
                <th class="td-identitydate center">Ngày cấp</th>
                <th class="td-identityplace left">Nơi cấp</th>
                <th class="td-position left">Chức danh</th>
                <th class="td-company left">Tên đơn vị</th>
                <th class="td-accountnumber left">Số tài khoản</th>
                <th class="td-bankname left">Tên ngân hàng</th>
                <th class="td-bankbranch left">Chi nhánh ngân hàng</th>
                <th class="td-feature center sticky-right-th">Chức năng</th>
              </thead>
              <tbody>
                <tr
                  v-for="emp in employees"
                  :key="emp.employeeId"
                  @dblclick="rowOnDblClick(emp)"
                >
                  <td class="center sticky-left">
                    <div class="div-checkbox">
                      <label class="checkbox-box">
                        <input
                          type="checkbox"
                          v-model="selected"
                          :value="emp.EmployeeId"
                          number
                        />
                        <span class="checkmark"> </span>
                      </label>
                    </div>
                  </td>
                  <td class="left">{{ emp.EmployeeCode }}</td>
                  <td class="left">{{ emp.FullName }}</td>
                  <td class="left">{{ formatGender(emp.Gender) }}</td>
                  <td class="center">
                    {{ formatDate(emp.DateOfBirth) }}
                  </td>
                  <td class="left">{{ emp.IdentityNumber }}</td>
                  <td class="center">{{ formatDate(emp.IdentityDate) }}</td>
                  <td class="left">{{ emp.IdentityPlace }}</td>
                  <td class="left">{{ emp.PositionName }}</td>
                  <td class="left">{{ emp.DepartmentName }}</td>
                  <td class="left">{{ emp.BankAccountNumber }}</td>
                  <td class="left">{{ emp.BankName }}</td>
                  <td class="left">
                    {{ emp.BankProvinceName }}
                  </td>
                  <td class="center sticky-right">
                    <el-dropdown
                      trigger="click"
                      @click="rowOnDblClick(emp)"
                      split-button
                    >
                      <span class="el-dropdown-link"> Sửa </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item @click="cloneEmployee(emp)"
                            >Nhân bản</el-dropdown-item
                          >
                          <el-dropdown-item @click="DeleteEmployee(emp)">
                            Xoá
                          </el-dropdown-item>
                          <el-dropdown-item>Ngưng sử dụng</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="content-page">
          <div class="content-page-left">
            Tổng số: <b id="">{{ this.Paging.TotalRecord }}</b> bản ghi
          </div>
          <div class="content-page-right">
            <div class="page">
              <el-pagination
                :total="this.Paging.TotalRecord"
                v-model:page-size="PageSize"
                v-model:current-page="currentPage"
                @current-change="currentChange"
                :page-sizes="[2, 5, 10, 15, 20]"
                background
                :pager-count="4"
                layout="sizes, prev, pager, next"
                @size-change="sizeChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EmployeeDetails
    v-if="IsShowDialog"
    :employeeSelected="employeeSelected"
    :employeeArray="employeeArray"
    @CloseDialog="showDialog"
    @reloadPage="reload"
    :EditMode="EditMode"
  />
  <div v-if="IsShowBox" class="popup-message-contain" id="DeleteMessage">
    <div class="popup-message">
      <div class="message">
        <div class="box-icon-message">
          <div class="icon-message-yellow"></div>
        </div>
        <div class="message-content">
          <p>{{ this.error }}</p>
        </div>
      </div>
      <div class="message-line-message"></div>
      <div class="btn-confirm-group">
        <button class="btn-default btn-text" @click="btnNo">Không</button>
        <button class="btn-message-close" @click="btnYes(emp)">Có</button>
      </div>
    </div>
  </div>

  <div v-if="isShowDelete" class="popup-message-contain" id="DeleteMessage">
    <div class="popup-message">
      <div class="message">
        <div class="box-icon-message">
          <div class="icon-message-yellow"></div>
        </div>
        <div class="message-content">
          <p>{{ this.error }}</p>
        </div>
      </div>
      <div class="message-line-message"></div>
      <div class="btn-confirm-group">
        <button class="btn-default btn-text" @click="cancelDeleteSerial">
          Không
        </button>
        <button class="btn-default btn-long btn-text" @click="deleteSerial">
          Có
        </button>
      </div>
    </div>
  </div>

  <BLoading v-if="isLoading" />
</template>
<script>
import axios from "axios";
import EmployeeDetails from "./EmployeeDetail.vue";
import ContextMenu from "../base/ContextMenu/ContextMenu.vue";
import ContextMenuItem from "../base/ContextMenu/ContextMenuItem.vue";
import ToolTip from "../base/ToolTip/ToolTip.vue";
import { log } from "console";

export default {
  name: "EmployeeList",
  components: {
    EmployeeDetails,
    ContextMenu,
    ContextMenuItem,
    ToolTip,
  },
  data() {
    return {
      DeleteId: {}, //Hàm lấy Code của nhân viên
      IsShowBox: false,
      EditMode: 0,
      errors: [],
      IsShowDialog: false,
      employees: [],
      employeeArray: [], //Chứa thông tin của employee
      employeeSelected: {},
      IsLoading: false,
      Paging: {},
      CheckBox: false,
      PageSize: 10,
      TotalRecord: 0,
      currentPage: 1,
      filterName: "",
      selected: [], // Code đã selected
      isShowDelete: false,
      isShowDeleteSerial: false,
      changeValue: false,
    };
  },
  methods: {
    /**
     * Author: THBAC (22/7/2022 - 23h33)
     * Hàm ẩn hiện nút xoá hàng loạt
     */
    checkSelected() {
      try {
        if (this.selected.length != 0) {
          this.isShowDeleteSerial = true;
        } else this.isShowDeleteSerial = false;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (19/7/2022 - 15h37)
     * Xuất file excel
     */
    tableToExcel() {
      try {
        window.open("http://localhost:5046/api/v1/Employees/Export");
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (21/7/2022 - 10:28)
     * Chức năng nút xoá hàng loạt
     */
    btnDeleteSerial() {
      try {
        this.isShowDelete = true;
        this.error = "Bạn có thực sự muốn xoá những nhân viên đã chọn không?";
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (21/7/2022 - 10:34)
     *  Huỷ xoá hàng loạt
     */
    cancelDeleteSerial() {
      try {
        this.isShowDelete = false;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author: THBAC (19/7/2022 - 15h08)
     * Chức năng xoá hàng loạt
     */
    deleteSerial() {
      this.isShowDelete = false;
      var me = this;
      try {
        if (this.selected.length == 0) return;
        else {
          this.selected.forEach((element) => {
            try {
              axios
                .delete(
                  `http://localhost:5046/api/v1/Employees?employeeId=${element}`
                )
                .then(function (res) {
                  console.log(res);
                });
              this.reload();
            } catch (error) {
              console.log(error);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (18/7/2022 - 15h17)
     * Tính năng nhân bản
     */
    cloneEmployee(emp) {
      try {
        this.EditMode = 2;
        this.employeeSelected = emp;
        console.log(this.employeeSelected);
        this.showDialog(true);
        this.EditMode = 2;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (13/7/2022 - 23:26)
     * Thay đổi số bản ghi trên một trang
     */
    sizeChange() {
      try {
        var me = this;
        me.isLoading = true;
        axios
          .get(
            `http://localhost:5046/api/v1/Employees/filter?pageIndex=${this.currentPage}&pageSize=${this.PageSize}&filter=${this.filterName}`
          )
          .then(function (response) {
            me.isLoading = false;
            me.employees = response.data.Data;
            console.log(response);
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (error) {
        console.log(res);
      }
    },
    /**
     * Author: THBAC (13/7/2022 - 21:10)
     * Ấn đổi trang
     */
    currentChange() {
      try {
        var me = this;
        me.isLoading = true;
        axios
          .get(
            `http://localhost:5046/api/v1/Employees/filter?pageIndex=${this.currentPage}&pageSize=${this.PageSize}&filter=${this.filterName}`
          )
          .then(function (response) {
            me.isLoading = false;
            me.employees = response.data.Data;
            console.log(response);
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (error) {
        console.log(res);
      }
    },
    /**
     * Author: THBAC (13/7/2022 - 16:54)
     * Tìm kiếm
     */

    search() {
      try {
        var me = this;
        me.isLoading = true;
        setTimeout(
          () =>
            axios
              .get(
                `http://localhost:5046/api/v1/Employees/filter?pageIndex=${this.currentPage}&pageSize=${this.PageSize}&filter=${this.filterName}`
              )
              .then(function (response) {
                me.isLoading = false;
                me.Paging = response.data;
                me.employees = response.data.Data;
                console.log(response);
              })
              .catch(function (res) {
                console.log(res);
              }),
          1000
        );
      } catch (error) {
        console.log(res);
      }
    },

    /**
     * Author: THBAC (11/7/2022 - 8:49)
     * Nút huỷ xoá nhân viên
     */
    btnNo() {
      try {
        this.IsShowBox = false;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (11/7/2022 - 8:49)
     * Nút đồng ý xoá nhân viên
     */
    btnYes() {
      var me = this;
      try {
        axios
          .delete(
            `http://localhost:5046/api/v1/Employees?employeeId=${this.DeleteId.EmployeeId}`
          )
          .then(function (res) {
            me.IsShowBox = false;
            me.DeleteId = {};
            // window.location.reload();
            me.reload();
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (11/7/2022 - 8:49)
     * Hàm xoá nhân viên, khi ấn sẽ hiện lên thông báo hỏi có chắc chắn muốn xoá không
     */
    DeleteEmployee(emp) {
      try {
        this.IsShowBox = true;
        this.DeleteId = emp;
        this.error =
          "Bạn có thực sự muốn xoá Nhân viên <" +
          this.DeleteId.EmployeeCode +
          "> không?";
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (11/7/2022 - 8:49)
     * Lấy dữ liệu của thằng con truyền về để đóng form chi tiết nhân viên
     */
    showDialog(isShow) {
      try {
        this.IsShowDialog = isShow;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author: THBAC (11/7/2022 - 8:49)
     * Đúp chuột hiển thị lên form chi tiết nhân viên và vào chế độ sửa
     */
    rowOnDblClick(emp) {
      try {
        this.EditMode = 1;
        this.employeeSelected = emp;
        console.log(this.employeeSelected);
        this.showDialog(true);
        this.EditMode = 1;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (11/7/2022 - 8:49)
     * Nút thêm mới để mở ra form chi tiết nhân viên vào chế độ thêm mới
     */
    btnAddNew() {
      try {
        this.EditMode = 0;
        var me = this;
        this.showDialog(true);

        this.employeeSelected = {};
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (11/7/2022 - 8:55)
     * Nút reload lại dữ liệu
     */
    btnReload() {
      // window.location.reload();
      try {
        this.reload();
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Author: THBAC (15/7/2022 - 9:58)
     * Định dạng giới tính
     */
    formatGender(gender) {
      let genderConvert;
      try {
        if (gender == 0) genderConvert = "Nam";
        if (gender == 1) genderConvert = "Nữ";
        if (gender == 2) genderConvert = "Khác";
        return genderConvert;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Author: THBAC (11/7/2022 - 8:32)
     * Định dạng datetime
     */
    formatDate(dob) {
      let dateConvert = new Date(dob);
      try {
        if (
          dob &&
          dateConvert instanceof Date &&
          !isNaN(dateConvert.valueOf())
        ) {
          let date = dateConvert.getDate();
          date = date < 10 ? `0${date}` : date;
          //Lay ra thang
          let month = dateConvert.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
          //lay ra nam
          let year = dateConvert.getFullYear();
          dob = `${date}/${month}/${year}`;
          return dob;
        } else {
          return "";
        }
      } catch (error) {
        console.log(error);
      }
    },
    /* Author: THBAC (18/7/2022 - 20h09)
     * Hàm reload
     */
    reload() {
      var me = this;
      this.isLoading = true;
      try {
        // this.employees = {};
        axios
          .get(
            `http://localhost:5046/api/v1/Employees/filter?pageIndex=${this.currentPage}&pageSize=${this.PageSize}&filter=${this.filterName}`
          )
          .then(function (response) {
            me.isLoading = false;
            me.Paging = response.data;
            me.employees = response.data.Data;
            console.log(response);
          })
          .catch(function (res) {
            console.log(res);
          });
      } catch (error) {
        console.log(res);
      }
    },
    /**
     * Author: THBAC (19/7/2022 - 11h22)
     * Check các Id đã có trong hàm selected chưa
     */
    checkSelectAll() {
      var test = true;
      this.employees.forEach((element) => {
        if (this.selected.includes(element.EmployeeId) == false) test = false;
      });
      return test;
    },
  },
  computed: {
    /**
     * Author: THBAC (19/7/2022 - 9h16)
     * Select all checkbox
     */
    selectAll: {
      get: function () {
        return this.employees.length ? this.checkSelectAll() : false;
      },
      set: function (value) {
        var selected1 = [];

        if (value) {
          this.employees.forEach(function (emp) {
            selected1.push(emp.EmployeeId);
          });
        }
        if (!this.checkSelectAll()) {
          selected1.forEach((element) => {
            if (!this.selected.includes(element)) this.selected.push(element);
          });
        } else {
          this.employees.forEach(function (emp) {
            selected1.push(emp.EmployeeId);
          });

          selected1.forEach((element) => {
            let index = this.selected.indexOf(element);
            this.selected.splice(index, 1);
          });
        }
      },
    },
  },
  // Hàm khởi tạo dữ liệu
  /**
   * Author: THBAC (11/7/2022 - 8:59)
   * Hàm xoá nhân viên, khi ấn sẽ hiện lên thông báo hỏi có chắc chắn muốn xoá không
   */
  created() {
    try {
      var me = this;
      me.isLoading = false;
      console.log("2. created");
      //Lấy dữ liệu employee theo phân trang
      axios
        .get(
          `http://localhost:5046/api/v1/Employees/filter?pageIndex=${this.currentPage}&pageSize=${this.PageSize}&filter=${this.filterName}`
        )
        .then(function (response) {
          me.isLoading = false;
          me.Paging = response.data;
          me.employees = response.data.Data;
          console.log(response);
        })
        .catch(function (res) {
          console.log(res);
        });

      // Lấy toàn bộ thông tin của employee để kiểm tra mã đã tồn tại hay chưa
      axios
        .get("http://localhost:5046/api/v1/Employees")
        .then(function (fb) {
          me.employeeArray = fb.data;
          console.log(fb);
        })
        .catch(function (feedback) {
          console.log(feedback);
        });
    } catch (error) {
      console.log(res);
    }
  },
};
</script>


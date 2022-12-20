<template>
  <div class="content_data">
    <div class="content_search">
      <div class="input_icon_container">
        <i class="fas fa-search icon_input"></i>
        <input
          type="text"
          class="m_input input_icon"
          placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"
        />
      </div>
      <div class="refresh">
        <div class="refresh_img"></div>
      </div>
    </div>
    <div class="content_table_page">
      <div class="content_table">
        <table class="table">
          <thead>
            <th class="center">
              <div class="div_checkbox">
                <label class="checkbox_box">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </th>
            <th class="left">Mã nhân viên</th>
            <th class="left">Tên nhân viên</th>
            <th class="left">Giới tính</th>
            <th class="left">Ngày sinh</th>
            <th class="left">Số CMND</th>
            <th class="left">Chức danh</th>
            <th class="left">Tên đơn vị</th>
            <th class="left">Số tài khoản</th>
            <th class="left">Tên ngân hàng</th>
            <th class="left">Chi nhánh ngân hàng</th>
            <th class="center">Chức năng</th>
          </thead>
          <tbody>
            <tr>
              <td class="td_check center">
                <div class="div_checkbox">
                  <label class="checkbox_box">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </td>
              <td class="td_id left">NV-532408</td>
              <td class="td_name left">Hồ Văn Long</td>
              <td class="td_gender left">Khac</td>
              <td class="td_date left">11/08/1978</td>
              <td class="td_card left">051125002</td>
              <td class="td_position left">Giám đốc</td>
              <td class="td_company left">Vận hành tại hà nội</td>
              <td class="td_accountnumber left">051125002</td>
              <td class="td_bankname left">BIDV</td>
              <td class="td_bankbranch left">Hà thành</td>
              <td class="td_feature center">
                <button class="btn_feature">
                  Sửa
                  <i class="fas fa-angle-up feature_icon_up"></i>
                  <i class="fas fa-angle-down feature_icon_down"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="content_page">
      <div class="content_page_left">Tổng số: <b id=""></b> bản ghi</div>
      <div class="content_page_right">
        <select class="select_quantity">
          <option value="20" selected>20 bản ghi trên một trang</option>
        </select>
        <div class="page">
          <button class="btn_move_page btn_pre_page">Trước</button>
          <div class="page_number_list">
            <button class="page_number page_number_select">1</button>
            <button class="page_number">2</button>
            <button class="page_number">3</button>
            <button class="page_number">...</button>
            <button class="page_number">52</button>
          </div>
          <button class="btn_next_page">Sau</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployeeList",
  components: {},
  data() {
    return {
      FullName: "Trinh Hoai Bac",
      employee: [],
    };
  },
  // beforeCreate(){
  beforeCreate() {
    console.log("1. beforecreated");
  },
  created() {
    console.log("2. created");
  },
  beforeMount() {
    console.log("3. beforemount");
  },
  mounted() {
    console.log("4. mounted");
  },
  beforeUpdate() {
    console.log("5. beforeupdate");
  },
  updated() {
    console.log("6.updated");
  },
  beforeUnmount() {
    console.log("7. beforeunmount");
  },
  unmounted() {
    console.log("8. unmounted");
  },
};
</script>

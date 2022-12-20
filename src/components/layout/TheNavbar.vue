<template>
  <div class="nav" id="navbar">
    <div class="nav-header">
      <div class="togge"></div>
      <div class="app-img"></div>
    </div>
    <div class="list-menu-item">
      <el-tooltip content="Tổng quan" :hide-after="0" placement="right-end">
        <div class="menu-item item-focus">
          <div class="item-icon">
            <div class="item-icon-img general"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Tổng quan</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Tiền mặt" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img money"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Tiền mặt</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Tiền gửi" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img cash"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Tiền gửi</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Mua hàng" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img buy"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Mua hàng</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Bán hàng" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img sell"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Bán hàng</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Quản lý hoá đơn" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img manage"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Quản lý hoá đơn</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Kho" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img stock"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Kho</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Công cụ sử dụng" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img tool"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Công cụ sử dụng</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Tài sản cố định" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img asset"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Tài sản cố định</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Thuế" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img tax"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Thuế</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Giá thành" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img price"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Giá thành</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Tổng hợp" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img combine"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Tổng hợp</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Ngân sách" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img budget"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Ngân sách</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Báo cáo" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img report"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Báo cáo</a>
          </div>
        </div>
      </el-tooltip>
      <el-tooltip content="Phân tích tài chính" :hide-after="0" placement="right-end">
        <div class="menu-item">
          <div class="item-icon">
            <div class="item-icon-img analysis"></div>
          </div>
          <div class="item-text">
            <a class="item-name">Phân tích tài chính</a>
          </div>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

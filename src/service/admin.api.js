import { format } from "date-fns";
import api from "./api";

export const addMovies = async (dataMovie) => {
  try {
    const response = await api.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      dataMovie
    );
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${id}`);

    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const updateMovies = async (item) => {
  try {
    const formData = new FormData();
    formData.append("maPhim", item.maPhim);
    formData.append("tenPhim", item.tenPhim);
    formData.append("trailer", item.trailer);
    formData.append("moTa", item.moTa);
    formData.append("maNhom", item.maNhom || "GP04");
    formData.append("ngayKhoiChieu", item.ngayKhoiChieu);
    formData.append("sapChieu", item.sapChieu);
    formData.append("dangChieu", item.dangChieu);
    formData.append("hot", item.hot);
    formData.append("danhGia", item.danhGia);
    if (item.hinhAnh && item.hinhAnh instanceof File) {
      formData.append("hinhAnh", item.hinhAnh);
    }
    const response = await api.post("/QuanLyPhim/CapNhatPhimUpload", formData);
    console.log("Update thành công:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

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
    const response = await api.delete("/QuanLyPhim/CapNhatPhimUpload", item);

    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};

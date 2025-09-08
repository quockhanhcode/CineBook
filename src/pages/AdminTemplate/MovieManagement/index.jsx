import { Eye, Star, SquarePen, Trash2, Plus } from "lucide-react";

import PaginationCustom from "../../HomeTemplate/_components/PaginationCustom";
import { useDispatch } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";
import AddMovie from "./AddMovie";
import { getListMovieApi } from "../../../service/movie.api";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";

export default function MovieManagement() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const limit = 10;
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["listMovie", page],
    queryFn: () => getListMovieApi("GP01", page, limit),
    keepPreviousData: true,
  });

  const totalPages = Math.ceil(movie?.totalCount / limit);

  return (
    <>
      <div className="p-4 lg:p-4 xl:p-4 border border-[#eee] rounded-xl shadow-sm ">
        <div className="flex justify-between">
          <div className="block w-[300px] lg:w-sm">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">
              Quản lý phim
            </h2>
            <div className="mb-6">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-400 focus:border-pink-400 block w-full p-2.5"
                placeholder="Tìm kiếm phim"
              />
            </div>
          </div>
          <button
            onClick={() => dispatch(setOpenPopup(true))}
            className="flex items-center gap-1 text-white bg-[var(--mainColor)] font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-[var(--mainColor)] hover:shadow-[0_0_10px_#e396c1] transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden md:block">Thêm phim mới</span>
          </button>
        </div>

        <div className="border border-[#eee] rounded-lg shadow-sm w-full ">
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 min-w-[840px]">
              <thead className="text-sm text-gray-500 text-center bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left w-[10%]">
                    Poster
                  </th>
                  <th scope="col" className="px-3 py-4 text-left w-[35%]">
                    Tên phim
                  </th>
                  <th scope="col" className="px-3 py-4 w-[10%]">
                    Đánh giá
                  </th>
                  <th scope="col" className="px-3 py-4 w-[16%]">
                    Ngày phát hành
                  </th>
                  <th scope="col" className="px-3 py-4 w-[17%]">
                    Trạng thái
                  </th>
                  <th scope="col" className="px-3 py-4 w-[12%]">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {movie &&
                  movie.items.length > 0 &&
                  movie.items.map((item) => {
                    return (
                      <tr
                        key={item.maPhim}
                        className="bg-white border-b  border-gray-200 hover:bg-gray-50 "
                      >
                        <td className="px-6 py-4 pr-2">
                          <img
                            className="w-18 object-cover object-center"
                            src={item.hinhAnh}
                            alt={item.tenPhim}
                          />
                        </td>
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 "
                        >
                          <p className="line-clamp-1">{item.tenPhim}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="text-yellow-400 w-5" />
                            <span className="font-semibold text-black">
                              {item.danhGia}/10
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-500 text-center">
                            {format(item.ngayKhoiChieu, "MM/dd/yyyy")}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={` text-xs font-medium px-2.5 py-0.5 rounded-full block w-fit mx-auto ${
                              item.dangChieu === true
                                ? "bg-green-100 text-green-800"
                                : "bg-[#FCB53B] text-white"
                            }`}
                          >
                            {item.dangChieu === true
                              ? "Đang Chiếu"
                              : "Sắp Chiếu"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-center gap-3">
                            <Eye className="text-blue-500 w-5 cursor-pointer hover:text-blue-800 transition-all duration-300" />
                            <SquarePen className="text-yellow-500 w-5 cursor-pointer hover:text-yellow-800 transition-all duration-300" />
                            <Trash2 className="text-red-500 w-5 cursor-pointer hover:text-red-800 transition-all duration-300" />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between flex-col gap-3 lg:flex-row px-6 py-5">
            <p className="text-gray-500 text-sm text-center">
              Hiển thị {limit} phim mỗi trang{" "}
              <span className="sm:inline-block hidden">-</span>{" "}
              <br className="sm:hidden" /> Tổng cộng 50 phim
            </p>
            <PaginationCustom
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(p) => setPage(p)}
            />
          </div>
        </div>
      </div>

      <AddMovie />
    </>
  );
}

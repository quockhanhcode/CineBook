import React from "react";
import { Film, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";

export default function AddMovie() {
  const { isOpenPopup } = useSelector((state) => state.homeSlice);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleClose = () => {
    dispatch(setOpenPopup(false));
  };
  return (
    <div>
      <Dialog
        open={isOpenPopup}
        as="div"
        className="focus:outline-none"
        onClose={() => dispatch(setOpenPopup(false))}
      >
        <div className="fixed z-[999] inset-0 flex w-screen items-center justify-center p-4 bg-[#0009]">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className=" w-6xl rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="relative flex items-center p-6 bg-pink-50 rounded-t-xl">
                <div className="w-13 h-13 rounded-lg bg-[var(--mainColor)] flex items-center justify-center text-white">
                  <Film className="w-8 h-8 duration-300 transition-all" />
                </div>
                <div className="block ml-4">
                  <p className="text-2xl font-bold text-gray-800">
                    Thêm phim mới
                  </p>
                  <p className="text-base text-gray-600">
                    Điền thông tin phim để thêm vào hệ thống
                  </p>
                </div>

                <div className="absolute inset-y-0 right-4 h-fit my-auto cursor-pointer p-2 hover:text-[var(--mainColor)]">
                  <X onClick={handleClose} className="w-6 h-6" />
                </div>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="visitors"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Mã Phim
                      </label>
                      <input
                        {...register("maPhim")}
                        disabled
                        placeholder="GP01"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Tên Phim"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tên Phim
                      </label>
                      <input
                        {...register("tenPhim")}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tên Phim..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Trailer"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Trailer
                      </label>
                      <input
                        {...register("trailer")}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Đánh giá
                      </label>
                      <input
                        {...register("danhGia")}
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Đánh giá"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mô tả
                      </label>
                      <textarea
                        {...register("moTa")}
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Ngày Khởi Chiếu
                      </label>
                      <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div>
                        <input
                          {...register("ngayKhoiChieu")}
                          datepicker
                          id="default-datepicker"
                          type="date"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Select date"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-3.5">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultValue
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Hot
                        </span>
                      </label>
                      <label className="inline-flex flex-col cursor-pointer">
                        <span className="text-sm mb-3.5 font-medium text-gray-900 dark:text-gray-300">
                          Tình Trạng
                        </span>
                        <div className="space-y-2.5">
                          <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                            <input
                              id="bordered-radio-1"
                              type="radio"
                              defaultChecked
                              defaultValue
                              name="bordered-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="bordered-radio-1"
                              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Sắp Chiếu
                            </label>
                          </div>
                          <div className="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                            <input
                              id="bordered-radio-2"
                              type="radio"
                              defaultValue
                              name="bordered-radio"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="bordered-radio-2"
                              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Đang Chiếu
                            </label>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="mb-2.5">
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                      >
                        Hình Ảnh
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Xác Nhận
                  </button>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

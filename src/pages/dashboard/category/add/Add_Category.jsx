import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Kalbela_AuthProvider } from "../../../../context/MainContext";
import Custom_Button from "../../../../components/small_component/Custom_Button";
import Custom_Input from "../../../../components/small_component/Custom_Input";
import Link_Button from "../../../../components/small_component/Link_Button";
import uploadImage from "../../../../hooks/upload_image";
import sweet_alert from "../../../../utils/custom_alert";

const Add_Category = () => {


      const { user, base_url, } = useContext(Kalbela_AuthProvider);
      const navigate = useNavigate();

      const dataSubmit = async (e) => {
            e.preventDefault();
            const form_data = e.target;
            console.log(form_data, 'photo');
            const photo = form_data?.photo?.files[0];
            const photo_url = await uploadImage(photo);
            const data = {
                  name: form_data.categoryName.value,
                  slag: form_data.slag.value,
                  image: photo_url,
            };
            console.log(data, 'data');
            fetch(`${base_url}/category/create?token=${user._id}`, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data)
            }).then((res) => res.json())
                  .then((data) => {
                        console.log(data, 'data');
                        if (!data.error) {
                              sweet_alert("Success", data.message, "success");
                              navigate("/admin/category");
                        }
                        else {
                              sweet_alert("Error", data.message, "error");
                        }
                  });
      };




      return (
            <div>
                  <div className="w-full">
                        <div className="px-10 py-4">
                              <Link_Button name='Back to Category' url="/admin/category" />
                        </div>
                        <div className="my-8">

                              <div className="p-10 border-2  rounded m-10">
                                    <form onSubmit={dataSubmit} className="w-full ">
                                          <Custom_Input label="Category Name" name="categoryName" type="text" placeholder="Category Name" />
                                          <div className="my-4">
                                                <Custom_Input label="Category Slag" name="slag" type="text" placeholder="Category Slag" />
                                          </div>
                                          <input type="file" name="photo" accept="image/*" />

                                          <div className='mt-4'>
                                                <Custom_Button name="Create Category" />
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Add_Category;

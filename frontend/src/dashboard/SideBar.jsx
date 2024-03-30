import React, { useContext } from 'react'
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import userImg from "../assets/Books/adminprofile.png"
import { AuthContext } from '../contexts/AuthProvider';


export const SideBar = () => {
  const {user} = useContext(AuthContext)
  // console.log(user)
  return (  
      <Sidebar className='lg:sticky top-0 bg-blue-500' aria-label="Admin Dashboard">
        <div href="/" className='align-center justify-center'>
          <img src={user?.photoURL || userImg} alt="" className='w-14 ml-14 rounded-full'/>
        <p className='uppercase font-semibold text-center mt-2'>
          {
            user?.displayName || "Adminstrator"
          }
        </p>
        </div>

        <hr className='m-3'/>
      
      <Sidebar.Items className='scroll-smooth'>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            <p>
                Upload Books
            </p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>
                Manage Books
            </p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/users" icon={HiUser}>
            <p>
                Users
            </p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar
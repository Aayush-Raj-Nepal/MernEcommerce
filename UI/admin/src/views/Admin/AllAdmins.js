import React,{useEffect, useState} from 'react'
import {getAllAdmins,deleteAdmin} from "../../api/helper"
import {getMediaUrl} from "../../api/functions"
import Table from "../../Components/Table"
import Avatar from '@material-ui/core/Avatar';

function AllAdmins() {
    const [admins,setAdmins]=useState([])
    useEffect(() => {
    (async ()=>{
        const result=await getAllAdmins()
        result.map(r=>{r.actions=''
        return r
        })
          setAdmins((result))
          console.log(result)
      })() 
    }, [])
  //  let getData=(data)=> React.useMemo(
  //       () =>data,[]
  //     )
    

      const columns = React.useMemo(
        () => [
          {
            Header:"#SN",
            accessor:(row)=>row.email,
            Cell:(value)=><span>{value.row.index+1}</span>
          },
          {
            Header: 'Name',
            accessor: 'name', // accessor is the "key" in the data
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Phone',
            accessor: 'phone',
          },
          {
            Header: 'Address',
            accessor: 'address',
          },
          {
            Header: 'Image',
            accessor: 'image',
            Cell:({value})=><Avatar alt="Remy Sharp" src={getMediaUrl('product/'+value)} />
          },
          {
            Header: 'Actions',
            accessor: (row)=>row.name,
            Cell:(value)=><Actions values={value}></Actions>
          },
        ],
        []
      )
      const Actions=({values})=>{
        return (
          <div className="btn-group rounded-0">
            <button onClick={()=>editRow(values.row.index)} className="rounded-0 btn btn-sm btn-outline-info"><i className="fa fa-pen"></i></button>
            <button onClick={()=>deleteRow(values.row.index)} className="rounded-0 btn btn-sm btn-outline-danger"><i className="fa fa-trash"></i></button>
            
          </div>
        )
      }
      const deleteRow=(index)=>{
        window.confirm(admins[index].email+" is being deleted")
        deleteAdmin(admins[index]).then(resp=>{
          window.alert("Deleted Admin!")
        }).catch(err=>{
          console.log(err)
        })
       }
      const editRow=(index)=>{
        window.confirm(admins[index].email+" is being edited")
       }
    return (
        <div className="container-fluid rounded-0 alert alert-primary">
         <h1>All admins here</h1>
         {admins && admins.length>0 &&
            <Table columns={columns} data={admins}></Table>
         }
      
        </div>
    )
}

export default AllAdmins

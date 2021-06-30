import React, { useEffect ,useState} from "react";
import Base from "../../Components/Base";
import * as fb from "../../api/firebase";
import Header from "../../Components/Header";
import Table from "../../Components/Table";

function Index() {
    const[NL,setNL]=useState([])
    useEffect(() => {
        const fetchExtras = () => {
          fb.emailCollection
            .orderBy("createdOn", "desc")
            .onSnapshot((snapshot) => {
              let extrasArray = [];
              snapshot.forEach((doc) => {
                let post = doc.data();
                post.id = doc.id;
                extrasArray.push(post);
              });
              setNL(extrasArray);
              console.log(extrasArray)
            });
        };
       
        fetchExtras();
      }, []);
      const columns = React.useMemo(
          () => [
              {
                Header: "#SN",
                accessor: (row) => row.email,
                Cell: (value) => <span>{value.row.index + 1}</span>,
              },
              {
                  Header: "Email",
                  accessor: "email",
              },
          ],
          []
      );
    return (
        <div>
            <Base>
        <div className="container py-3 ">
           <h4>Newsletter Emails</h4>

           <div className="rounded-0 alert alert-primary">
          <div className="card p-3">
            {NL && NL.length > 0 && (
              <Table columns={columns} data={NL}></Table>
            )}
            {!NL && <p>No CM found please create category</p>}
          </div>
        </div>
        </div>
            </Base>
        </div>
    )
}

export default Index
import React, { useEffect ,useState} from "react";
import Base from "../../Components/Base";
import * as fb from "../../api/firebase";
import Header from "../../Components/Header";
import Table from "../../Components/Table";

function Index() {
    const[CM,setCM]=useState([])
    useEffect(() => {
        const fetchExtras = () => {
          fb.contactMessageCollection
            .orderBy("createdOn", "desc")
            .onSnapshot((snapshot) => {
              let extrasArray = [];
              snapshot.forEach((doc) => {
                let post = doc.data();
                post.id = doc.id;
                extrasArray.push(post);
              });
              setCM(extrasArray);
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
                  Header: "Name",
                  accessor: "name",
              },
              {
                  Header: "Email",
                  accessor: "email",
              },
              {
                  Header: "Subject",
                  accessor: "subject",
              },
              {
                  Header: "Message",
                  accessor: "message"
              }
          ],
          []
      );
    return (
        <div>
            <Base>
        <div className="container py-3 ">
           <h4>Contact Messages</h4>

           <div className="rounded-0 alert alert-primary">
          <div className="card p-3">
            {CM && CM.length > 0 && (
              <Table columns={columns} data={CM}></Table>
            )}
            {!CM && <p>No CM found please create category</p>}
          </div>
        </div>
        </div>
            </Base>
        </div>
    )
}

export default Index

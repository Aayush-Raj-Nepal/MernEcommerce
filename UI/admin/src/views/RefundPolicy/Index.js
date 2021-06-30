import React, { useEffect ,useState} from "react";
import * as fb from "../../api/firebase";
import Base from "../../Components/Base";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Index() {
    const [content, setContent] = useState("");
    const [editContent, setEditContent] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
      const fetchExtras = () => {
        fb.extrasCollection
          .orderBy("createdOn", "desc")
          .onSnapshot((snapshot) => {
            let extrasArray = [];
            snapshot.forEach((doc) => {
              let post = doc.data();
              post.id = doc.id;
              extrasArray.push(post);
            });
            let contact = extrasArray.filter((e) => e.type == "RefundPolicy")[0];
            setContent(contact ? contact.content : "");
            setEditContent(contact ? contact.content : "");
            setId(contact ? contact.id : "");
            console.log(contact);
          });
      };
  
      fetchExtras();
    }, []);
  const createPost=async ()=> {
    // create post in firebase
    console.log(editContent)
    await fb.extrasCollection.add({
      createdOn: new Date(),
      content: editContent,
      type:'RefundPolicy'
    });
  }
  const updatePost=async ( )=> {
    await fb.extrasCollection.doc(id).update({
      content:editContent
    });
  }
  const save = () => {
    console.log(typeof content);
    if (!content || content != "" || id !== "") {
      createPost();
    } else {
      updatePost();
    }
  };
  const reset=()=>{
      setEditContent(content)
  }
  const handleCKEditor = (data) => {
    // console.log(data)
    setEditContent(data);
  };
  return (
    <div>
      <Base>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            Privacy Policy Page
                            <div className="btn-group float-right">
                    {editContent != content && (
                      <button
                        onClick={() => save()}
                        className="btn btn-light btn-sm"
                      >
                        Save <i className="fa fa-pencil"></i>
                      </button>
                    )}
                    <button className="btn btn-primary btn-sm">
                      Edit <i className="fa fa-pencil"></i>
                    </button>
                  </div>
                        </div>
                        <div className="card-body">
                        <CKEditor
                  editor={ClassicEditor}
                  data={editContent}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    handleCKEditor(data);
                  }}
                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Base>
    </div>
  );
}

export default Index;
import React from "react";
import { Link } from "react-router-dom";

class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: []
    };
  }

  componentDidMount() {
    const url = "/documents";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ documents: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { documents } = this.state;
    const allDocuments = documents.map((document, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{document.title}</h5>
            <Link to={`/document/${document.id}`} className="btn custom-button">
              View Document
            </Link>
          </div>
        </div>
      </div>
    ));
    const noDocument = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No documents yet. Why not <Link to="/document">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">All Documents</h1>
            <p className="lead text-muted">
              Browse all the documents!
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/document" className="btn custom-button">
                Create New Document
              </Link>
            </div>
            <div className="row">
              {documents.length > 0 ? allDocuments : noDocument}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Documents;
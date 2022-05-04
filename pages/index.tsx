import type { NextPage } from 'next'
import Link from "next/link";

const Home: NextPage = () => {
  return (
      <div className="container">
        <h1 className="text-lg-center mt-5">Ikio-Tools</h1>
        <div className="mt-3 mb-3 d-flex w-100 justify-content-between">
          <h3>Lista eventos</h3>
          <button type="button" className="btn btn-success">Adicionar</button>
        </div>
        <div className="list-group">
          <Link href="/evento">
            <a  className="list-group-item list-group-item-action active" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Gladeadores</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
          </Link>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </a>
        </div>
      </div>
  )
}

export default Home

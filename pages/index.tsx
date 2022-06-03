import type { NextPage } from 'next'
import Event_list from '../containers/event-list';

const Home: NextPage = () => {
  return (
      <div className="container">
        <h1 className="text-lg-center mt-5">Ikio-Tools</h1>
        <div className="mt-3 mb-3 d-flex w-100 justify-content-between">
          <h3>Lista eventos</h3>
          <button type="button" className="btn btn-success">Adicionar</button>
        </div>
          <Event_list />
      </div>
  )
}

export default Home

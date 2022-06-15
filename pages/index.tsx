import type { NextPage } from 'next'
import { useState } from 'react';
import Modal_box from '../components/modal';
import Event_list from '../containers/event-list';
import { addEvent } from '../containers/event-list/constants';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
      <div className="container">
        <h1 className="text-lg-center mt-5">Ikio-Tools</h1>
        <div className="mt-3 mb-3 d-flex w-100 justify-content-between">
          <h3>Lista eventos</h3>
          <button type="button" className="btn btn-success" onClick={() => setShowModal(true)}>Adicionar</button>
        </div>
          <Event_list />
          <Modal_box title={'Crear evento'} body={addEvent} isShow={showModal} onClose={() => setShowModal(false)} />
      </div>
  )
}

export default Home

import EditarVehiculoModal from "./EditarVehiculoModal"


const Modal = ({visible, onClose, currentData, updateVehiculo, setShowModal }) => {
    const handleOnClose = (e) => {
        if(e.target.id === "container") onClose()
    }
    if(!visible) return null
    
  return (
    <>
        <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded w-1/3">
                <EditarVehiculoModal currentData={currentData} updateVehiculo={updateVehiculo} setShowModal={setShowModal} />
            </div>
        </div>
    </>
  )
}

export default Modal

 {/* <button onClick={() => setShowModal(true)} type='button' className='bg-sky-600 p-3 rounded uppercase font-bold w-28 max-sm:w-20'>Modal</button>
    <Modal onClose={handleOnclose} visible={showModal} /> */}

    // const handleOnclose = () => setShowModal(false)
    // const [showModal, setShowModal] = useState(false)
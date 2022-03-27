import './cv-detail-box.css'

function CvDetailBox({ title, startDate, endDate, enterprise, roleDescription, id }) {
    return (
        
        <div class="card cv-detail-box">
            <div class="card-body m-2" >
                <div className='d-flex align-items-center'>
                    <img src={enterprise.logo} alt={enterprise.name}></img>
                    <h5 class="card-title ms-4 mb-0">{title}</h5>
                </div>
                <p class="card-text text-muted text-end">{startDate}-{endDate || 'Present'}</p>
                <div class="accordion accordion-flush" id={`accordionFlushCv${id}`}>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id={`flush-heading${id}`}>
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id}`} aria-expanded="false" aria-controls={`flush-collapse${id}`}>
                                Ver más
                            </button>
                        </h2>
                        <div id={`flush-collapse${id}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${id}`} data-bs-parent={`#accordionFlushCv${id}`}>
                            <div class="accordion-body">{roleDescription}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CvDetailBox;
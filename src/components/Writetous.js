import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

function Writetous() {
  return (
    <div className="mx-0 mx-sm-auto">
  <div className="card">
    <div className="card-body">


      <form className="px-2" action="">
        <p className="text-center"><strong>How do you rate customer support:</strong></p>

        <ul className="h2 rating justify-content-center pb-3" data-mdb-toggle="rating">
          <li>
          <AiOutlineStar/>
          </li>
          <li>
          <AiOutlineStar/>
          </li>
          <li>
          <AiOutlineStar/>
          </li>
          <li>
          <AiOutlineStar/>
          </li>
          <li>
          <AiOutlineStar/>
          </li>
        </ul>

        <p className="text-center"><strong>What could we improve?</strong></p>

        <div className="form-outline mb-4">
          <textarea className="form-control" id="form4Example6" rows="4"></textarea>
          <label className="form-label" for="form4Example6">Your feedback</label>
        </div>
      </form>
    </div>
    <div className="card-footer text-end">
      <button type="button" className="btn btn-primary">Submit</button>
    </div>
  </div>
</div>
  )
}

export default Writetous
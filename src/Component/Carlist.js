
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import carData from '../Component/CarData.json';
// import CarCard from '../Component/CarCard';
// import { Link } from 'react-router-dom';
// import '../Style/carlist.css';

// function CarList({ totalPages }) {
//   const { page } = useParams();
//   const itemsPerPage = 9;
//   const currentPage = parseInt(page || 1);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedRelevance, setSelectedRelevance] = useState(''); // State for selecting relevance
//   const [selectedBrand, setSelectedBrand] = useState(''); // State for selecting brand

//   const filteredCars = carData.filter((car) =>
//     car.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Filter cars based on selected brand
//   const filteredByBrand = selectedBrand
//     ? filteredCars.filter((car) => car.make === selectedBrand)
//     : filteredCars;

//   // You can add your sorting logic here based on the selectedRelevance

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedCars = filteredByBrand.slice(startIndex, endIndex);

//   const generatePageNumbers = () => {
//     const pages = [];
//     const maxPages = totalPages > 10 ? 10 : totalPages;

//     // Calculate the start and end page numbers to display
//     let startPage = currentPage - Math.floor(maxPages / 2);
//     startPage = Math.max(startPage, 1);
//     const endPage = startPage + maxPages - 1;

//     for (let i = startPage; i <= endPage; i++) {
//       pages.push(i);
//     }
//     return pages;
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleRelevanceChange = (e) => {
//     setSelectedRelevance(e.target.value);
//     // You can add sorting logic here based on the selectedRelevance
//   };

//   const handleBrandChange = (e) => {
//     setSelectedBrand(e.target.value);
//   };

//   return (
//     <div className='CarList'>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//               />
//               <button
//                 className="btn btn-outline-success"
//                 type="submit"
//               >
//                 Search
//               </button>
//             </form>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Relevence
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       onClick={() => setSelectedRelevance('relevance')}
//                     >
//                       Relevance
//                     </a>
//                   </li>
//                   {/* Add more sorting options as needed */}
//                 </ul>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   All brands
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       onClick={() => setSelectedBrand('')}
//                     >
//                       All Brands
//                     </a>
//                   </li>
//                   {/* Replace with actual brand options from your data */}
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       onClick={() => setSelectedBrand('Toyota')}
//                     >
//                       Toyota
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       onClick={() => setSelectedBrand('Honda')}
//                     >
//                       Honda
//                     </a>
//                   </li>
//                   {/* Add more brand options as needed */}
//                 </ul>
//               </li>
//             </ul>
           
//           </div>
//         </div>
//       </nav>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           width: '80%',
//           margin: 'auto',
//           gap: '2rem',
//         }}
//       >
//         {paginatedCars.map((car) => (
//           <CarCard key={car.id} car={car} />
//         ))}
//       </div>

//       <div className="pagination">
//         <Link
//           to={`/page/${currentPage - 1}`}
//           className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
//         >
//           Previous
//         </Link>
//         {generatePageNumbers().map((page) => (
//           <Link
//             to={`/page/${page}`}
//             key={page}
//             className={`page-number ${page === currentPage ? 'active' : ''}`}
//           >
//             {page}
//           </Link>
//         ))}
//         <Link
//           to={`/page/${currentPage + 1}`}
//           className={`next ${currentPage === totalPages ? 'disabled' : ''}`}
//         >
//           Next
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CarList;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import carData from '../Component/CarData.json';
import CarCard from '../Component/CarCard';
import { Link } from 'react-router-dom';
import '../Style/carlist.css';
import {BiSearch} from 'react-icons/bi'
function CarList({ totalPages }) {
  const { page } = useParams();
  const itemsPerPage = 10;
  const currentPage = parseInt(page || 1);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRelevance, setSelectedRelevance] = useState(''); 
  const [selectedBrand, setSelectedBrand] = useState(''); 

  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter cars based on selected brand
  const filteredByBrand = selectedBrand
    ? filteredCars.filter((car) => car.make === selectedBrand)
    : filteredCars;

  // You can add your sorting logic here based on the selectedRelevance

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCars = filteredByBrand.slice(startIndex, endIndex);

  // const generatePageNumbers = () => {
  //   const pages = [];
  //   const maxPages = totalPages > 10 ? 10 : totalPages;

  //   // Calculate the start and end page numbers to display
  //   let startPage = currentPage - Math.floor(maxPages / 2);
  //   startPage = Math.max(startPage, 1);
  //   const endPage = startPage + maxPages - 1;

  //   for (let i = startPage; i <= endPage; i++) {
  //     pages.push(i);
  //   }
  //   return pages;
  // };
  const totalPageNumbers = Math.ceil(filteredByBrand.length / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPageNumbers }, (_, index) => index + 1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRelevanceChange = (e) => {
    setSelectedRelevance(e.target.value);
    // You can add sorting logic here based on the selectedRelevance
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div className='CarList'>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              className="btn"
              type="submit"
            >
              <BiSearch/>
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Relevance
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setSelectedRelevance('relevance')}
                    >
                      Relevance
                    </a>
                  </li>
                  {/* Add more sorting options as needed */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All brands
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setSelectedBrand('')}
                    >
                      All Brands
                    </a>
                  </li>
                  {/* Replace with actual brand options from your data */}
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setSelectedBrand('Toyota')}
                    >
                      Toyota
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setSelectedBrand('Honda')}
                    >
                      Honda
                    </a>
                  </li>
                  {/* Add more brand options as needed */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
        }}
      >
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <Link
            to={`/page/${pageNumber}`}
            key={pageNumber}
            className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>

    </div>
  );
}

export default CarList;


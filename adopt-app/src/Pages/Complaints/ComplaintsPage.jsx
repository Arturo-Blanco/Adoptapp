import './complaintsPage.css'
import 'Components/Card/ComplaintCard/ComplaintCard.css';
import React, { useState, useEffect } from 'react';
import { fetchComplaints } from 'Apis/getDenuncias'; 
import PageStructure from "Components/PagesStructure/PagesStructure";
import Pagination from 'Components/PaginationButton/Pagination';
import ComplaintCard from 'Components/Card/ComplaintCard/ComplaintCard';

const ComplaintsPage = () => {
    
    const [complaints, setComplaints] = useState([]);    
    const [currentPage, setCurrentPage] = useState(1); // Estado para controlar la página actual
    const itemsPerPage = 3;
    
    useEffect(() => {
        const fetchData = async () => {
          const complaintsData = await fetchComplaints();
          setComplaints(complaintsData);
        };
    
        fetchData();
      }, []);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
    
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentComplaints = complaints.slice(startIndex, endIndex);
  
    return (
      <PageStructure
        classNamePage='complaints'
        titlePage='Denuncias'
        sectionPage={
            <div className='denuncias-list'>
                {currentComplaints.map((complaint) => (
                    <ComplaintCard key={complaint.id} complaint={complaint} className="card-complaints card-fixed-height"/>
                    ))}
                <div className='pagination-container'>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(complaints.length / itemsPerPage)}
                        onPageChange={handlePageChange}
                    />
                </div>
          </div>
        }
      />
    );
  };  
  export default ComplaintsPage;
document.addEventListener('DOMContentLoaded', () =>{
    const Faqcontainer = document.querySelector('Fad-Accordion');

    Faqcontainer. addEventListener('click', (e)=>{
         const gruopHeader = e.target.closest('Faq-dropdown-header');
        
         if(!gruopHeader) return;
        
         const group = gruopHeader.parentElement;
         const groupbody = group.querySelector('Faq-dropdown-body');
         const icon = gruopHeader.querySelector('Fad-icon');

         icon.classList.toggle('open');
         groupbody.classList.toggle('open');

         const otherGroups =Faqcontainer.querySelectorAll('.Faq-dropdown');

         otherGroups.forEach((otherGroup) =>{
          if(otherGroup!== group){
            const otherGroupBody = otherGroup.querySelector('Faq-dropdown-body');
            const otherIcon = otherGroup.querySelector('Faq-icon');

            otherGroupBody.classList.remove('open');
            otherIcon.classList.remove('open');
          }  
         });
});
});
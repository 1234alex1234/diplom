const documentModalFunc = () => {


  const imgResponsive = document.querySelector('.img-responsive');
  const sertificateDocuments = document.querySelectorAll('.sertificate-document');
  const overlay = document.querySelector('.overlay');

  let div = document.createElement('div');
  div.className = 'document-modal';
  div.style.cssText = `
    display: none;
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: hidden;
  `;
  document.body.append(div);

  let span = document.createElement('span');
  span.className = 'document-close';
  span.innerText = 'x';
  span.style.cssText = `
      position: absolute;
      top: 15px;
      right: 35px;
      color: black;
      font-size: 40px;
      font-weight: bold;
      transition: 0.3s;
      cursor: pointer;
  `;
  div.append(span);

  let img = document.createElement('img');
  img.className = 'modal-img';
  img.style.cssText = `
   margin: auto;
   display: block;
   width: 80% ;
   max-width: 700px;
  `;
  div.append(img);

  sertificateDocuments.forEach(sertificateDocument => {
    sertificateDocument.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
      overlay.style.display = 'block';
      modalImg.src = this.href;
      document.querySelector('body').style.overflow = 'hidden';
    });
  });

  const documentClose = document.querySelector('.document-close');
  const modal = document.querySelector('.document-modal');
  const modalImg = document.querySelector(".modal-img");

  const closeDocumentModal = (e) => {
    if (e.target.classList.contains('document-close') || !e.target.closest('.modal-img')) {
      modal.style.display = "none";
      overlay.style.display = "none";
      document.querySelector('body').style.overflow = 'auto';
    }
  };

  modal.addEventListener("click", closeDocumentModal);
};

export default documentModalFunc;
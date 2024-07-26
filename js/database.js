// Certificates_Count
// fetch("https://portfolio-api-q2jq.onrender.com/update", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     data: [
//       "Certificates_Count",
//     ]
//   })})
// .then(r => r.json())
// .then(
//   r => {
//     let certi_data = r.data;
//     let certificate = document.getElementById('CertTextElement');
//     certificate.innerHTML = certi_data;
//   }
// )

// Competitions_Count
// fetch("https://portfolio-api-q2jq.onrender.com/update", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//         data: [
//             "Competitions_Count",
//         ]
//     })})
// .then(r => r.json())
// .then(
//     r => {
//         let comp_data = r.data;
//         let competitions = document.getElementById('CompTextElement');
//         competitions.innerHTML = comp_data;
//         console.log(competitions)
//     }
// )

// Certificates

// fetch('https://portfolio-api-q2jq.onrender.com/update', {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//         data: [
//             "Certificates",
//         ]
//     })})
//     .then(response => response.json())
//     .then(data => {
//         var numberOfHeadings = data.data;
//         var object = numberOfHeadings;
//         var swiper = new Swiper(".slide-content", {
//             slidesPerView: 3,
//             spaceBetween: 25,
//             loop: true,
//             centerSlide: true,
//             fade: true,
//             grabCursor: true,
//             pagination: {
//               el: ".swiper-pagination",
//               clickable: true,
//               dynamicBullets: true,
//             },
//             navigation: {
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             },

//             breakpoints:{
//                 0: {
//                     slidesPerView: 1,
//                 },
//                 520: {
//                     slidesPerView: 2,
//                 },
//                 950: {
//                     slidesPerView: 3,
//                 },
//             },
//           });
//         for (var key in object) {
//             var slide = document.createElement('div');
//             slide.classList.add('swiper-slide');
//             slide.innerHTML = `
//             <div class="card swiper-slide">
//                 <div id="certificate_${key}" class="image-content">
//                     <span class="overlay"></span>
//                     ${object[key].ribbon ? '<div class="ribbon"><span class="ribbon__content">Golden</span></div>' : ''}
//                     ${object[key].height === "full" ? '<div class="card-image" style="height: 100%">' : '<div class="card-image">'}
//                         <img src="${object[key].link}" alt="" class="card-img" onclick="window.open('${object[key].link}', '_blank');">
//                     </div>
//                 </div>
//                 <div class="card-content">
//                     <h2 id="name_${key}" class="name">${object[key].text}</h2>
//                     <p class="description">${object[key].description}</p>
//                 </div>
//             </div>`;
//             swiper.appendSlide(slide);
//         }
// });

// Stats

// $(window).one('scroll',function() {
//     fetch('https://portfolio-api-q2jq.onrender.com/update', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             data: [ 
//                 "Stats",
//             ]
//         })})
//         .then(response => response.json())
//         .then(data => {
//             var numberOfHeadings = data.data;
//             var object = numberOfHeadings;
//             for (var key in object) {
//                 var div = document.createElement('div');
//                 div.className = "skill-item"
//                 div.innerHTML = `
//                 <div class="skill-info clearfix">
//                     <h4 class="float-left mb-3 mt-0">${object[key].text}</h4>
//                     <span id="progress_${object[key].text}" class="float-right">${object[key].value}%</span>
//                 </div>
//                 <div class="progress">
//                     <div id="progress_${object[key].text} bar" class="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${object[key].value} data-color=${object[key].color} style="background-color: ${object[key].color}; width: ${object[key].value}% ">
//                     </div>
//                 </div>
//                 <div class="spacer" data-height="20" style="height: 20px;">
//                 </div>`;
//                 document.getElementById("stats-skill").appendChild(div);
//                 var progressBar = document.getElementById(`progress_${object[key].text} bar`);
//                 var keyframes = [
//                   {
//                     width: "10%"
//                   },
//                   {
//                     width: "15%"
//                   },
//                   {
//                     width: `${object[key].value}%`
//                   }
//                 ];

//                 var timing = {
//                   duration: 3500,
//                   easing: "linear"
//                 };

//                 progressBar.animate(keyframes, timing);

//             }
//     });
// });

// Projects

// $(window).one('scroll',function() {
//     fetch('https://portfolio-api-q2jq.onrender.com/update', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             data: [
//                 "Projects",
//             ]
//         })})
//         .then(response => response.json())
//         .then(data => {
//             var numberOfHeadings = data.data;
//             var object = numberOfHeadings;
//             var projects = document.createElement('div');
//             projects.className = "row blog-wrapper"
//             projects.id = "projects-wrapper"
//             document.body.appendChild(projects)
//             for (var key in object) {
//                 var div = document.createElement('div');
//                 div.className = "col-md-4"
//                 div.innerHTML = `
//                 <div id="project_${object[key].id}" class="blog-item rounded shadow-dark">
//                     <div class="thumb" style="border-radius: 20px;">
//                         <a href="#">
//                             <span class="category">${object[key].tag}</span>
//                         </a>
//                         <a href="${object[key].redirect}" target="${object[key].target}" >
//                             <img id="${object[key].id}" src="${object[key].link}" alt="blog-title" />
//                         </a>
//                     </div>
//                     <div class="details">
//                         <h4 class="my-0 title"><a href="#">${object[key].text}</a></h4>
//                     </div>
//                 </div>`;
//                 document.getElementById("projects").appendChild(div);
//             }
//     });
// });

// $(window).one('scroll',function() {
//   fetch('https://portfolio-api-q2jq.onrender.com/update', {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//           data: [
//               "Blogs",
//           ]
//       })})
//       .then(response => response.json())
//       .then(data => {
//           var numberOfHeadings = data.data;
//           var object = numberOfHeadings;
//           var collaborations = document.createElement('div');
//           collaborations.className = "row blog-wrapper"
//           collaborations.id = "blog-wrapper"
//           document.body.appendChild(collaborations)
//           for (var key in object) {
//               var div = document.createElement('div');
//               div.className = "col-md-4"
//               div.innerHTML = `
//                   <div class="blog-item rounded shadow-dark wow fadeIn">
//                       <div class="thumb">
//                           <a href="#">
//                               <span class="category">${object[key].tag}</span>
//                           </a>
//                           <a href="${object[key].href}" target="blank" >
//                               <img class="collab-img" src="${object[key].link}" alt="blog-title" style="filter: opacity(0.8);" />
//                           </a>
//                       </div>
//                       <div class="details">
//                           <h4 class="my-0 title"><a href="#">${object[key].text} <i id="${object[key].icon}-logo" class="${object[key].icon}"></i></a></h4>
//                       </div>
//                   </div>`;
//               document.getElementById("blogs").appendChild(div);
//           }
//   });
// });

// $(window).one('scroll',function() {
//     fetch('https://portfolio-api-q2jq.onrender.com/update', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             data: [
//                 "Collaborations",
//             ]
//         })})
//         .then(response => response.json())
//         .then(data => {
//             var numberOfHeadings = data.data;
//             var object = numberOfHeadings;
//             var collaborations = document.createElement('div');
//             collaborations.className = "row blog-wrapper"
//             collaborations.id = "collaborations-wrapper"
//             document.body.appendChild(collaborations)
//             for (var key in object) {
//                 var div = document.createElement('div');
//                 div.className = "col-md-4"
//                 div.innerHTML = `
//                     <div class="blog-item rounded shadow-dark wow fadeIn">
//                         <div class="thumb">
//                             <a href="#">
//                                 <span class="category">${object[key].tag}</span>
//                             </a>
//                             <a href="${object[key].href}" target="blank" >
//                                 <img class="collab-img" src="${object[key].link}" alt="blog-title" />
//                             </a>
//                         </div>
//                         <div class="details">
//                             <h4 class="my-0 title"><a href="#">${object[key].text} <i id="${object[key].icon}-logo" class="${object[key].icon}"></i></a></h4>
//                         </div>
//                     </div>`;
//                 document.getElementById("collaborations").appendChild(div);
//             }
//     });
// });

// const testimonialsData = [
//     {
//         name: "John Doe",
//         icon: "path/to/john-doe.jpg",
//         text: "This is a fantastic service! Highly recommend."
//     },
//     {
//         name: "Jane Smith",
//         icon: "path/to/jane-smith.jpg",
//         text: "Amazing experience. Will definitely use again."
//     }
//     // Add more testimonials as needed
// ];


// function initTestimonialSlider(testimonialsData) {
//     const testimonialsContainer = document.getElementById("testimonial-slider");

//     function createTestimonialCard(testimonial) {
//         return `
//         <div class="outerdiv">
//         <div class="innerdiv">
//           <div class="div1 eachdiv">
//             <div class="userdetails">
//               <div class="imgbox">
//                 <img src="${testimonial.icon}" alt="">
//               </div>
//               <div class="detbox">
//                 <p class="name">${testimonial.name} </p>
//                 <p class="designation">Client</p>
//               </div>
//             </div>
//             <div class="review">
//               <h4>⭐⭐⭐⭐⭐</h4>
//             <p>“${testimonial.text}”</p>
//             </div>
//           </div>
//         </div>
//         </div>`;
//     }

//     testimonialsData.forEach((testimonial) => {
//         const testimonialCardHTML = createTestimonialCard(testimonial);
//         testimonialsContainer.innerHTML += testimonialCardHTML;
//     });

//     // Initialize Slick Carousel
//     $("#testimonial-slider").slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         arrows: true,
//         dots: true,
//     });
// }

// // Call the function with the hardcoded data
// initTestimonialSlider(testimonialsData);


// $(window).one('scroll', function () {
//     fetch('https://portfolio-api-q2jq.onrender.com/update', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             data: ["Testimonials"],
//         }),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             var numberOfHeadings = data.data;
//             var object = numberOfHeadings;
//             var testimonals = document.createElement('div');
//             testimonals.className = "row blog-wrapper";
//             testimonals.id = "testimonals-wrapper";
//             document.body.appendChild(testimonals);
//             var testimonialData = [];
//             for (var key in object) {
//                 var testimonial = {
//                     name: object[key].name,
//                     icon: object[key].icon,
//                     text: object[key].text,
//                 };
//                 testimonialData.push(testimonial);
//             }
//             initTestimonialSlider(testimonialData);
//         });
// });

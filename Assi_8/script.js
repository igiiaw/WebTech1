const pages = {
    home: `
        <div class="hero-section text-center">
            <div class="container">
                <h1>Student Portfolio</h1>
                <p>Web Development Projects</p>
            </div>
        </div>
        <div class="container page-content">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5>Web Design</h5>
                            <p>Creating responsive and modern websites with clean design</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5>Development</h5>
                            <p>Building functional web applications using modern technologies</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5>JavaScript</h5>
                            <p>Adding interactive features and animations to websites</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    projects: `
        <div class="container page-content">
            <h2 class="text-center">My Projects</h2>
            
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <img src="calc.jpg" class="project-img">
                        <div class="card-body">
                            <h5>Calculator App</h5>
                            <p>Simple calculator with basic operations built with vanilla JavaScript</p>
                            <button class="btn btn-primary btn-sm" onclick="showModal('Calculator App', 'A basic calculator application that performs arithmetic operations. Built using HTML, CSS, and JavaScript. Features include addition, subtraction, multiplication, and division.')">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="todo.jpg" class="project-img">
                        <div class="card-body">
                            <h5>Todo List</h5>
                            <p>Task management application with local storage functionality</p>
                            <button class="btn btn-primary btn-sm" onclick="showModal('Todo List', 'A task management app that allows users to add, delete, and mark tasks as complete. Data persists using browser local storage.')">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="Ld.png" class="project-img">
                        <div class="card-body">
                            <h5>Landing Page</h5>
                            <p>Responsive landing page built with Bootstrap framework</p>
                            <button class="btn btn-primary btn-sm" onclick="showModal('Landing Page', 'A modern responsive landing page designed with Bootstrap. Features smooth scrolling, animations, and mobile-first approach.')">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5">
                <div class="col-12">
                    <h4 class="text-center">Project Gallery</h4>
                    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="card-1-img.jpg" class="d-block w-100">
                            </div>
                            <div class="carousel-item">
                                <img src="card-2-img.jpg" class="d-block w-100">
                            </div>
                            <div class="carousel-item">
                                <img src="card-3-img.jpg" class="d-block w-100">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5">
                <div class="col-12">
                    <h4 class="text-center">Technical Skills</h4>
                    <div class="accordion" id="skillsAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                                    Frontend Technologies
                                </button>
                            </h2>
                            <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#skillsAccordion">
                                <div class="accordion-body">
                                    <div class="skill-bar">
                                        <div class="skill-progress" style="width: 0%;" data-width="85%">HTML/CSS - 85%</div>
                                    </div>
                                    <div class="skill-bar">
                                        <div class="skill-progress" style="width: 0%;" data-width="75%">Bootstrap - 75%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                    Programming Languages
                                </button>
                            </h2>
                            <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#skillsAccordion">
                                <div class="accordion-body">
                                    <div class="skill-bar">
                                        <div class="skill-progress" style="width: 0%;" data-width="70%">JavaScript - 70%</div>
                                    </div>
                                    <div class="skill-bar">
                                        <div class="skill-progress" style="width: 0%;" data-width="65%">jQuery - 65%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                                    Tools & Others
                                </button>
                            </h2>
                            <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#skillsAccordion">
                                <div class="accordion-body">
                                    <div class="skill-bar">
                                        <div class="skill-progress" style="width: 0%;" data-width="80%">Git/GitHub - 80%</div>
                                    </div>
                                    <div class="skill-bar">
                                        <div class="skill-progress" style="width: 0%;" data-width="75%">Responsive Design - 75%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    contact: `
        <div class="container page-content">
            <h2 class="text-center">Get In Touch</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5>Send Message</h5>
                            <form id="contactForm">
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="subject">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Message</label>
                                    <textarea class="form-control" id="message" rows="4" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h5>Contact Information</h5>
                            <p><strong>Email:</strong> myemail@gmail.com</p>
                            <p><strong>Phone:</strong> +7 777 777 7777</p>
                            <p><strong>Location:</strong> Astana, Kazakhstan</p>
                            <p><strong>University:</strong> Astana IT University</p>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-body">
                            <h5>Open to</h5>
                            <ul>
                                <li>Freelance stuff</li>
                                <li>Internships</li>
                                <li>Cool collabs</li>
                                <li>Part-time work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

function showPage(page) {
    $('#mainContent').fadeOut(200, function() {
        $('#mainContent').html(pages[page]).fadeIn(200);
        
        if (page === 'contact') {
            initContactForm();
        }
        if (page === 'projects') {
            animateSkills();
        }
    });
    
    $('html, body').animate({ scrollTop: 0 }, 300);
}

function initContactForm() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return false;
        }
        
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        alert('Thank you ' + name + '! Your message has been sent successfully.');
        
        $(this).fadeOut(200, function() {
            this.reset();
            $(this).fadeIn(200);
        });
    });
}

function animateSkills() {
    setTimeout(function() {
        $('.skill-progress').each(function() {
            var width = $(this).data('width');
            $(this).animate({ width: width }, 1200);
        });
    }, 400);
}

function showModal(title, content) {
    $('#modalTitle').text(title);
    $('#modalBody').html('<p>' + content + '</p>');
    var modal = new bootstrap.Modal($('#projectModal'));
    modal.show();
}

$(document).ready(function() {
    showPage('home');
});
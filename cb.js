document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");
    const chatOutput = document.getElementById("chat-output");

    // Example responses
    const responses = {
        hello: "Hi there! How can I help you today?",
        admissions: "For admissions inquiries, please visit our Admissions page.",
        contact: "You can contact us via email at contact@ourcollege.edu or call (123) 456-7890.",

        hello: "Hi there! How can I help you today?",
        admissions: "For admissions inquiries, please visit our Admissions page.",
        contact: "You can contact us via email at contact@ourcollege.edu or call (123) 456-7890.",
        default: "I'm not sure about that. Can you try rephrasing your question?",
        location: "KIET Ghaziabad is located at NH-58, Delhi-NCR, Ghaziabad, Uttar Pradesh, India.",
        courses: "KIET offers B.Tech, MBA, MCA, B.Pharm, M.Tech, and many more programs.",
        departments: "The departments include Computer Science, Electronics, Mechanical, Civil, IT, and more.",
        fee_structure: "You can find the detailed fee structure on our official website under the 'Admissions' section.",
        hostel: "Yes, KIET provides hostel facilities for both boys and girls with excellent amenities.",
        transport: "KIET offers a transport facility connecting various parts of Delhi-NCR and nearby towns.",
        library: "Our library is well-equipped with thousands of books, journals, and digital resources.",
        placement: "KIET has an excellent placement record with top recruiters like Infosys, TCS, Wipro, and more.",
        fest: "Our annual tech and cultural fest 'KIET Confluence' is a great attraction for students.",
        sports: "KIET has world-class facilities for cricket, basketball, volleyball, and other sports.",
        lab_facilities: "State-of-the-art labs are available for hands-on experience in all technical fields.",
        faculty: "Our faculty members are highly qualified and experienced in their respective fields.",
        scholarships: "Scholarships are available based on merit and other criteria. Visit our Scholarship page for more details.",
        cafeteria: "The campus cafeteria serves hygienic and delicious meals and snacks.",
        alumni: "Our alumni are placed in top organizations worldwide, including Google, Microsoft, and Amazon.",
        rankings: "KIET is consistently ranked among the top engineering colleges in Uttar Pradesh.",
        canteen_timings: "The canteen operates from 8:00 AM to 8:00 PM.",
        ragging_policy: "KIET has a strict anti-ragging policy to ensure a safe environment for all students.",
        admission_criteria: "Admissions are based on entrance exams like JEE Main and other qualifying exams.",
        contact_timing: "You can contact us between 9:00 AM and 5:00 PM on weekdays.",
        internship: "Our Career Development Cell helps students secure internships with reputed organizations.",
        research: "KIET encourages research and provides funding and resources for innovative projects.",
        attendance_policy: "Students are required to maintain a minimum of 75% attendance in each semester.",
        academic_calendar: "The academic calendar is available on the website under the 'Academics' section.",
        online_classes: "Yes, online classes are conducted via our Learning Management System.",
        scholarships_for_girls: "KIET provides special scholarships and incentives for female students.",
        hostel_fee: "The hostel fee is available on the official website under the 'Hostel' section.",
        lab_timings: "Labs are open from 9:00 AM to 6:00 PM on working days.",
        grievance: "For grievances, please contact our Student Welfare Cell or write to grievance@kiet.edu.",
        clubs: "We have various clubs like robotics, music, photography, literature, and more.",
        research_centers: "KIET houses advanced research centers in AI, IoT, and robotics.",
        medical_facility: "A 24/7 medical facility with a certified doctor is available on campus.",
        results: "Semester results can be accessed on the student portal.",
        wifi: "The entire campus is Wi-Fi enabled for uninterrupted internet access.",
        discipline: "KIET follows strict discipline to ensure a conducive learning environment.",
        library_timings: "The library operates from 8:00 AM to 8:00 PM on all working days.",
        holidays: "Holiday lists are published on the website under the 'Announcements' section.",
        exam_schedule: "The examination schedule is available on the student portal.",
        workshops: "Regular workshops and training programs are conducted for skill enhancement.",
        industrial_visits: "Industrial visits are arranged to give students practical exposure.",
        guest_lectures: "Eminent speakers are invited regularly for guest lectures.",
        cultural_activities: "Cultural activities are organized to foster creativity and talent.",
        student_mentorship: "Each student is assigned a mentor for guidance and support.",
        campus_area: "The KIET campus spans over 18.5 acres with modern infrastructure.",
        phd_programs: "We offer PhD programs in various technical and management disciplines.",
        part_time_courses: "Currently, we do not offer part-time courses.",


        default: "I'm not sure about that. Can you try rephrasing your question?"
    };

    // Function to process user input
    const processInput = () => {
        const userMessage = chatInput.value.trim().toLowerCase();
        if (!userMessage) return;

        // Append user message to the chat
        appendMessage("You", userMessage);

        // Determine bot response
        const botResponse = responses[userMessage] || responses.default;

        // Append bot response to the chat
        setTimeout(() => appendMessage("Bot", botResponse), 500);

        // Clear the input
        chatInput.value = "";
    };

    // Function to append a message to the chat output
    const appendMessage = (sender, message) => {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${sender.toLowerCase()}`;
        messageElement.textContent = `${sender}: ${message}`;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
    };

    // Event listeners
    sendButton.addEventListener("click", processInput);
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            processInput();
        }
    });
});

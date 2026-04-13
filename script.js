// --- Mock Data Injection for Media Team Workflows ---

const data = {
    projects: [
        { title: "Summer Brand Campaign", type: "Video Shoot", status: "In Progress" },
        { title: "TikTok Ad Creatives", type: "Editing", status: "Review" },
        { title: "Corporate Testimonials", type: "Pre-Production", status: "Planning" }
    ],
    
    assignments: [
        { name: "Alex R.", role: "Lead Videographer", task: "Setup lighting for interview A" },
        { name: "Sarah M.", role: "Senior Editor", task: "Color grade TikTok batch" },
        { name: "David K.", role: "Social Manager", task: "Schedule YouTube Shorts" }
    ],
    
    todos: [
        { text: "Render 4K output for client review", priority: "High" },
        { text: "Draft shot list for tomorrow", priority: "High" },
        { text: "Backup SD cards to NAS", priority: "Med" },
        { text: "Find upbeat B-roll music track", priority: "Low" }
    ],
    
    contentCalendar: [
        { month: "APR", day: "14", title: "Behind The Scenes Reel", platform: "<i class='fa-brands fa-instagram'></i> Instagram" },
        { month: "APR", day: "15", title: "Testimonial Cut 01", platform: "<i class='fa-brands fa-linkedin'></i> LinkedIn" },
        { month: "APR", day: "18", title: "Product Promo Drop", platform: "<i class='fa-brands fa-tiktok'></i> TikTok" }
    ],
    
    schedule: [
    ],
    
    workflow: {
        raw: ["Summer Promo Cam A", "Summer Promo Cam B"],
        edit: ["Podcast Ep 44", "TikTok Ad Variations"],
        rev: ["Corporate Testimonial Cut V2"],
        final: ["Spring Sale Teaser"]
    },
    
    progress: [
        { name: "Summer Campaign", pct: 65 },
        { name: "Podcast Batch 4", pct: 90 },
        { name: "Corporate Testimonials", pct: 15 }
    ],
    
    deadlines: [
        "<strong>Apr 16:</strong> Client Review - Corporate V2",
        "<strong>Apr 18:</strong> Final Delivery - Podcast audio",
        "<strong>Apr 20:</strong> Shoot day - Summer Campaign Location #2"
    ],
    
    equipment: [
        { item: "Canon 600d", checked: true },
        { item: "Sigma 24-70mm f/2.8 DG DN", checked: true },
        { item: "DJI RS 3 Pro Gimbal", checked: false },
        { item: "128GB ProGrade SD Cards (x3)", checked: true },
        { item: "Avention Card Reader", checked: false },
        { item: "Mini HDMI", checked: false }
    ],
    
    comms: [
        { user: "Sarah M.", time: "10:24 AM", msg: "Just uploaded the rough cut to Frame.io! Please review when possible." },
        { user: "Alex R.", time: "09:12 AM", msg: "Gimbal batteries are charging now. We'll be ready for 1PM B-roll." },
        { user: "David K.", time: "Yesterday", msg: "Client approved the captions. We are clear to schedule the Instagram posts." }
    ],
    
    completed: [
        { title: "Spring Sale Teaser", type: "15s Vertical Video", icon: "fa-mobile-screen" },
        { title: "Podcast Ep 43", type: "Full Length + Audio", icon: "fa-podcast" },
        { title: "CEO Welcome Message", type: "Website Header Video", icon: "fa-desktop" },
        { title: "Recruitment Highlights", type: "LinkedIn Promo", icon: "fa-users" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Set Date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', dateOptions);

    // 1. Projects
    document.getElementById('projects-container').innerHTML = data.projects.map(p => `
        <div class="project-item">
            <div class="p-info"><h3>${p.title}</h3><p>${p.type}</p></div>
            <div class="p-status">${p.status}</div>
        </div>
    `).join('');

    // 2. Editing Workflow
    const renderKanban = (arr, elId) => {
        document.getElementById(elId).innerHTML = arr.map(i => `<div class="k-card">${i}</div>`).join('');
    };
    renderKanban(data.workflow.raw, 'kw-raw');
    renderKanban(data.workflow.edit, 'kw-edit');
    renderKanban(data.workflow.rev, 'kw-rev');
    renderKanban(data.workflow.final, 'kw-final');

    // 3. Content Calendar
    document.getElementById('calendar-container').innerHTML = data.contentCalendar.map(c => `
        <div class="cal-item">
            <div class="cal-date"><span class="m">${c.month}</span><span class="d">${c.day}</span></div>
            <div class="cal-info"><h4>${c.title}</h4><p>${c.platform}</p></div>
        </div>
    `).join('');

    // 4. Shooting Schedule
    const schedHTML = data.schedule.length > 0 ? data.schedule.map(s => `
        <div class="cal-item">
            <div class="cal-info" style="min-width: 80px;"><p style="color: var(--accent-main); font-weight: 700;">${s.time}</p></div>
            <div class="cal-info"><h4>${s.title}</h4><p><i class="fa-solid fa-location-dot"></i> ${s.location}</p></div>
        </div>
    `).join('') : '<p style="text-align:center; padding: 1.5rem 0; color: var(--text-secondary); font-size: 0.85rem; font-style: italic;">No shoots scheduled currently.</p>';
    document.getElementById('schedule-container').innerHTML = schedHTML;

    // 5. Assignments
    document.getElementById('assignments-container').innerHTML = data.assignments.map(a => `
        <div class="assign-item">
            <div class="avatar">${a.name.charAt(0)}</div>
            <div class="a-details"><h4>${a.name}</h4><p>${a.task}</p></div>
            <div class="a-role">${a.role}</div>
        </div>
    `).join('');

    // 6. To-Do
    document.getElementById('todo-container').innerHTML = data.todos.map(t => `
        <div class="todo-item">
            <div class="t-left">
                <input type="checkbox">
                <span class="t-text">${t.text}</span>
            </div>
            <span class="t-badge badge-${t.priority}">${t.priority}</span>
        </div>
    `).join('');

    // 7. Progress
    document.getElementById('progress-container').innerHTML = data.progress.map(p => `
        <div class="prog-item">
            <div class="prog-top"><span>${p.name}</span> <span style="color: var(--accent-main);">${p.pct}%</span></div>
            <div class="prog-bar-bg"><div class="prog-fill" style="width: ${p.pct}%;"></div></div>
        </div>
    `).join('');

    // 8. Deadlines
    document.getElementById('deadlines-container').innerHTML = data.deadlines.map(d => `
        <div class="list-item"><i class="fa-regular fa-clock"></i> <span>${d}</span></div>
    `).join('');

    // 9. Equipment
    document.getElementById('equipment-container').innerHTML = data.equipment.map(e => `
        <div class="list-item" style="cursor: pointer;">
            <input type="checkbox" style="margin-right: 0.5rem; accent-color: var(--accent-main);" ${e.checked ? 'checked' : ''}> 
            <span style="${e.checked ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${e.item}</span>
        </div>
    `).join('');

    // 11. Comms
    document.getElementById('comms-container').innerHTML = data.comms.map(c => `
        <div class="msg-item">
            <div class="msg-hdr"><strong>${c.user}</strong> <span>${c.time}</span></div>
            <div class="msg-text">${c.msg}</div>
        </div>
    `).join('');

    // 12. Completed Outputs
    document.getElementById('completed-container').innerHTML = `<div class="completed-grid">` + data.completed.map(c => `
        <div class="c-thumb">
            <div class="c-icon"><i class="fa-solid ${c.icon}"></i></div>
            <div class="c-info"><h4>${c.title}</h4><p>${c.type}</p></div>
        </div>
    `).join('') + `</div>`;

});

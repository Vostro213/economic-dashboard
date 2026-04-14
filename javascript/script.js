// ===============================
// Login & Show Password
// ===============================
function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");
    emailError.innerText = "";
    passError.innerText = "";

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email) { emailError.innerText = "يرجى إدخال البريد الإلكتروني"; return; }
    if (!emailPattern.test(email)) { emailError.innerText = "البريد الإلكتروني غير صحيح"; return; }
    if (!password) { passError.innerText = "يرجى إدخال كلمة المرور"; return; }
    if (password.length < 4) { passError.innerText = "كلمة المرور ضعيفة"; return; }

    alert("تم تسجيل الدخول بنجاح");
    smoothNavigate("dashboard.html");
}

// ===============================
// Dark Mode Toggle
// ===============================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// حفظ الوضع عند إعادة تحميل الصفحة
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// ===============================
// Dashboard Navigation
// ===============================
function goToDashboard() { smoothNavigate("dashboard.html"); }
function goToAccounting() { smoothNavigate("accounting.html"); }
function goToSuppliers() { smoothNavigate("suppliers.html"); }
function goToLegal() { smoothNavigate("legal.html"); }
function goToSupport() { smoothNavigate("support.html"); }
function goToAnalysis() { smoothNavigate("analysis.html"); }

// ===============================
// Services Navigation
// ===============================
function openService(serviceName) {
    const pages = {
        accounting: "accounting.html",
        suppliers: "suppliers.html",
        legal: "legal.html",
        support: "support.html",
        market: "service.html?service=market",
        project: "service.html?service=project",
        finance: "service.html?service=finance",
        stats: "service.html?service=stats",
        balance: "service.html?service=balance"
    };
    smoothNavigate(pages[serviceName] || "service.html");
}

// ===============================
// Services Page Dynamic Content
// ===============================
if (window.location.pathname.includes("service.html")) {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const title = document.getElementById("serviceTitle");
    const desc = document.getElementById("serviceDescription");

    const content = {
        accounting: ["الملف المحاسبي", "فتح الملف المحاسبي، متابعة الحسابات، إدارة الفواتير والمعاملات المالية للشركة."],
        suppliers: ["نافذة الموردين", "نافذة للتواصل مع الموردين والشركات في المجالات الاقتصادية، الفلاحية، والاستشفائية."],
        legal: ["الملحق القانوني", "ملحق قانوني لجميع التساؤلات حول الحالات الاقتصادية والقانونية."],
        support: ["مركز الاستشارات", "تضم هذه النافذة متخصصين ومستشارين اقتصاديين وقانونيين لتقديم الدعم والمشورة."],
        market: ["دراسة السوق", "تحليل السوق، العرض والطلب والمنافسين لتحديد الفرص الاستثمارية."],
        project: ["إدارة المشاريع", "تنظيم المشاريع، توزيع المهام، التخطيط لتحقيق أهداف المشروع بنجاح."],
        finance: ["التحليل المالي", "تحليل الأرباح والخسائر والتكاليف لتقييم الأداء المالي للمشاريع."],
        stats: ["الإحصائيات", "عرض البيانات والأرقام لتحليل القرارات الاقتصادية بدقة."],
        balance: ["ميزان المراجعة", "عرض المجاميع والأرصدة أونلاين لمتابعة الأصول والخصوم وحساب النتائج."]
    };

    if (content[service]) {
        title.innerText = content[service][0];
        desc.innerText = content[service][1];
    } else {
        title.innerText = "الخدمات الاقتصادية";
        desc.innerText = "اختر خدمة لعرض التفاصيل.";
    }
}

// ===============================
// Alerts Toggle
// ===============================
function showAlerts() {
    const alertsBox = document.getElementById("alertsBox");
    if (alertsBox) alertsBox.classList.toggle("hidden");
}

// ===============================
// Profile Menu
// ===============================
function toggleProfileMenu() {
    const menu = document.getElementById("profileMenu");
    menu.classList.toggle("hidden");
}

function logout() {
    alert("تم تسجيل الخروج");
    smoothNavigate("index.html");
}

// اغلاق قائمة البروفايل عند الضغط خارجها
document.addEventListener("click", function(e) {
    const profile = document.querySelector(".user-profile");
    const menu = document.getElementById("profileMenu");
    if (menu && !profile.contains(e.target)) menu.classList.add("hidden");
});

// ===============================
// Sidebar Active Item
// ===============================
document.querySelectorAll(".sidebar-menu li").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".sidebar-menu li").forEach(li => li.classList.remove("active"));
        this.classList.add("active");
    });
});

// ===============================
// Smooth Page Navigation
// ===============================
function smoothNavigate(url) {
    document.body.style.transition = "opacity 0.3s ease";
    document.body.style.opacity = 0;
    setTimeout(() => window.location.href = url, 300);
}

window.addEventListener('DOMContentLoaded', () => document.body.style.opacity = 1);
// ===============================
// Show Password
// ===============================


// ===============================
// Animated Text (English/Arabic)
// ===============================
const texts = ["Economic Mediator", "الوسيط الاقتصادي"];
let index = 0;
const textEl = document.getElementById("textAnimation");

function animateText() {
    textEl.style.opacity = 0;
    setTimeout(() => {
        textEl.innerText = texts[index];
        textEl.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 500);
}

setInterval(animateText, 2500);
// ===============================
// Add Invoice (No Database)
// ===============================
const invoiceBody = document.getElementById("invoice-body"); // tbody الخاص بالجدول
let invoiceCount = invoiceBody ? invoiceBody.children.length + 1 : 1; // يبدأ من عدد الصفوف الحالي

function addInvoice() {
    if (!invoiceBody) return;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${invoiceCount.toString().padStart(3,'0')}</td>
        <td>عميل جديد</td>
        <td>0$</td>
        <td><span class="status pending">معلقة</span></td>
    `;
    invoiceBody.appendChild(newRow);
    invoiceCount++;
}
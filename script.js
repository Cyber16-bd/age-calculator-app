function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('result').innerText = "দয়া করে একটি তারিখ সিলেক্ট করুন!";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // মাস বা দিন যদি চলতি মাসের চেয়ে কম হয়, তবে বয়স ১ বছর কমবে
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `আপনার বয়স: ${age} বছর`;
}



export default function formatDate(time)  {
    const totalMinutes = parseInt(time, 10); // Ensure time is parsed as an integer
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    // Format remainingMinutes to always have two digits
    const formattedMinutes = remainingMinutes.toString().padStart(2, '0');

    return { hours, remainingMinutes, formattedMinutes };
};

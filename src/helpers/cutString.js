export const userDisplayView = (user, maxLength = 15) => {
    if (user?.length > maxLength)
        return user.slice(0, maxLength - 3) + '...';
    else
        return user;
}
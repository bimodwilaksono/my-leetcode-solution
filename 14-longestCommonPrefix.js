function longestCommonPrefix(strs) {
    if (strs.length < 1) return "";
    strs.sort();
    const longest = strs[strs.length - 1];
    const shortest = strs[0];
    let prefix = "";

    for (let i = 0; i < strs.length; i++) {
        if (longest[i] !== shortest[i]) return prefix;
        prefix += longest[i];
    }
    return prefix;
}

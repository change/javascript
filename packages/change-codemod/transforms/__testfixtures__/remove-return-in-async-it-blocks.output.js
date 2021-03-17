  it("returns JSON including the current SHA from the application's Versionfile", async () => {
    const result = await request(app).get('/').expect(200, { current_sha: null });
    await validateResponse0(result);
  });

  it("returns JSON including the current SHA from the application's Versionfile", async () => {
    const result = await request(app).get('/').expect(200, { current_sha: null });
    validateResponse1(result);
  });

  it("returns JSON including the current SHA from the application's Versionfile", async () => {
    const result = await request(app).get('/').expect(200, { current_sha: null });
    await validateResponse1(result);
  });

  it("returns JSON including the current SHA from the application's Versionfile", () => {
    const result = request(app).get('/').expect(200, { current_sha: null });
    return validateResponse2(result);
  });


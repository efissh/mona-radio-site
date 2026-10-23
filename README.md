# Mona Radio website publishing repository

This repository publishes the Mona Radio static site at https://monaradio.com.
It contains no Time Detective site content and must never change the Pages
settings of efissh/time-detective-site.

Authoritative content: the established MonaRadio-Website authoring repository,
with HTML/CSS/assets under site/. This repository is a generated publishing
snapshot, not a separately maintained copy. Historical Mona Radio pages in
efissh/time-detective-site are left intact for existing links; do not maintain
new content there independently.

Update workflow: edit and review site/ in the authoring repository, run its
local link checker, and commit there. Run tools/prepare-pages.py with this
checkout as its destination, review the generated diff, commit it here and
push main after publication authorization. .github/workflows/pages.yml uploads
only the site routes and assets; repository documentation is not deployed.

GitHub Pages source: GitHub Actions. Custom domain: monaradio.com. The CNAME
file records the intended domain; Actions publishing still requires the
domain to be configured in the repository Pages settings.

Status of this initial snapshot: PREPARED; privacy changes require operator
approval before publication. No remote creation, publication or DNS change
is authorized by this file.

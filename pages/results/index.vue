<template>
  <section id="result" class="mt-5">
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col">
          <div class="card bg-dark text-white">
            <div class="card-body">
              <h5 class="card-title">Judul</h5>
              <code class="card-text fw-bold fs-1">XXXX</code>
              <div class="text-win">Win</div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark text-white">
            <div class="card-body">
              <h5 class="card-title">Judul</h5>
              <code class="card-text fw-bold fs-1">XXXX</code>
              <div>-</div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark text-white">
            <div class="card-body">
              <h5 class="card-title">Judul</h5>
              <code class="card-text fw-bold fs-1">XXXX</code>
              <div class="text-lose">Lose</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="table-responsive">
        <table class="table table-dark table-hover caption-top">
          <caption class = "text-secondary">
            Semua History
          </caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tanggal</th>
              <th scope="col">Pools</th>
              <th scope="col">Bet</th>
              <th scope="col">Total</th>
              <th scope="col">Keluar</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Senin, 10 Des 2024</td>
              <td>Judul</td>
              <td class = "w-50">
                <div>78, 90, 18, 25, 30, 29, 73, 96, 34, 16</div>
              </td>
              <td>48</td>
              <td>78</td>
              <td>
                <div class="text-win">Win</div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Senin, 10 Des 2024</td>
              <td>Judul</td>
              <td class = "w-50">
                <div>78, 90, 18, 25, 30, 29, 73, 96, 34, 16</div>
              </td>
              <td>46</td>
              <td>96</td>
              <td>
                <div class="text-lose">Lose</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

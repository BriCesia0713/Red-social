export const header=`<header>
                <nav class="navbar navbar-expand-lg py-2">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="#" id="nombre-user">      
                        <img id="img-user" src="" alt="img" width="30" height="24" class="d-inline-block align-text-top">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                <img src="assets/img/perfil.png" alt="img" width="30" height="24" class="d-inline-block align-text-top">
                                Perfil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active navbar-brand" aria-current="page" href="#">&lt;CoderPlace/&gt;</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Logout</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>`;

export const main=`
<div class="container-main">
  <div class="general-information">

  <div class="container-post">
    <div class="charging">
      <img src="assets/img/cat-charging.gif" />
    </div
    <div class="new-post">
    <form id="task-form">
    <textarea rows="4" cols="50" placeholder="¿Qué quieres compartir?" id="task-description"></textarea>
    <div class="containerProgress">
      <div class="progress"></div>
    </div>
    <div class="hide divImg">
      <span class="deleteImg">❌</span>
      <img class="picPost"/>
    </div>
    <div class="container-functions">
      <div class="camera-privacity">
      <input type="file" id="photoPost" class="hide" accept="image/*">
      <label for="photoPost"><img src="assets/img/camera.png" class="camera"></label>        
        <div class="privacidad">
          <select id="privacyPostArea">
            <option value="1">🌎 Público</option>
          </select>
        </div>
      </div>
      <button id="btn-task-form"> Compartir</button>
    </div>
  </div>
  <div class="container-post">
<div class="container p-4">
  <div class="row">
    <div >
      <ul class="list-group" id="posts">
      </ul>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
</div>`;